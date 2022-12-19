import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipeItem: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }
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
    let ingredients = [];

    if (this.editMode) {
      this.recipeItem = this.recipeService.getRecipeByid(this.id);
      name = this.recipeItem.name;
      description = this.recipeItem.description;
      imagePath = this.recipeItem.imagePath;
      ingredients = this.recipeItem.ingredients;

      this.recipeForm = new FormGroup(
        {
          'recipeName': new FormControl(name),
          'description': new FormControl(description),
          'imagePath': new FormControl(imagePath),
          'ingredients': new FormArray(ingredients)
        }
      );
    }


  }
  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormControl(null));
  }
  onAddRecipe() {

  }
}

