import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./recipe.service";


@Component({
    selector: 'app-recipes-start',
    templateUrl: './recipes-start.component.html',
    styleUrls: ['./recipes-start.component.css']
})

export class RecipesStartComponent implements OnInit{

    valid = false;

    constructor(private recipeService: RecipeService){}

    ngOnInit(): void {
        this.recipeService.getRecipesNotNull.subscribe(valid => {
            this.valid = valid;
            // console.log('Recipes null? '+ valid);
        })
    }
}