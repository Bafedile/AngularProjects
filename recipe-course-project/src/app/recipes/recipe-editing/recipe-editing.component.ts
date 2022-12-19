import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, FormGroupName, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Ingredient } from "src/app/shared/ingredrient.model";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-editing',
    templateUrl: 'recipe-editing.component.html',
    styleUrls: ['recipe-editing.component.css'],
})

export class RecipeEditingComponent {
    id: number;
    isValid: false;
    editMode = false;
    recipeForm: FormGroup;
    recipeItem: Recipe;
    imageSrc: string;
    editedRecipe: Recipe;
    imageSuffixes = [
        'jpg', 'webp', 'jpeg', 'gif', 'png', 'raw', 'images'
    ]
    constructor(private route: ActivatedRoute, private recipeService: RecipeService,
        private router: Router) { }
    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.formInit();
        }
        );
    }

    formInit() {
        let name = '';
        let description = '';
        let imagePath = '';
        let ingredients = new FormArray([]);
        let recipe: Recipe;

        if (this.editMode) {
            recipe = this.recipeService.getRecipeByid(this.id);
            name = recipe.name;
            description = recipe.description;
            imagePath = recipe.imagePath;

            this.imageSrc = imagePath;
            if (recipe['ingredients']) {
                for (let ingredient of recipe.ingredients) {
                    ingredients.push(
                        new FormGroup({
                            'name': new FormControl(ingredient.name, [Validators.required]),
                            'amount': new FormControl(ingredient.amount, [Validators.required])
                        })
                    );
                }
            }
        }

        this.recipeForm = new FormGroup(
            {
                'recipeName': new FormControl(name, [Validators.required]),
                'description': new FormControl(description, [Validators.required]),
                'imagePath': new FormControl(imagePath, [this.imagePathValidator.bind(this), Validators.required]),
                'ingredients': ingredients
            }
        );
    }

    onAddIngredients() {
        (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup(
            {
                'name': new FormControl(null, [Validators.required]),
                'amount': new FormControl(null, [Validators.required])
            }
        ));
    }

    onEditRecipe() {
        this.editedRecipe = new Recipe(
            this.recipeForm.get('recipeName').value,
            this.recipeForm.get('description').value,
            this.recipeForm.get('imagePath').value,
            this.recipeForm.get('ingredients').value
        );

        if (this.editMode) {
            this.recipeService.editRecipe(this.id, this.editedRecipe);
        } else {
            this.recipeService.addRecipe(this.editedRecipe);
        }
        this.router.navigate(['../'], { relativeTo: this.route });

    }

    imagePathValidator(control: FormControl): { [s: string]: boolean } {
        for (let sub of this.imageSuffixes) {
            if (control.value.toUpperCase().includes(sub.toUpperCase())) {
                this.imageSrc = control.value;
                return { 'imageValidated': true };
            }
        }
        return { 'imageValidated': false };
    }

    onRemoveIngredient(value: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(value);
    }

    onDelete() {
        this.recipeService.deleteRecipe(this.id);
    }
    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}

