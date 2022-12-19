import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { Ingredient } from "../shared/ingredrient.model";

import { Recipe } from "./recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {
    // private recipes: Recipe[] = [
    //     new Recipe('Big Fat Burger', 'This is simply a test', 'https://images.pexels.com/photos/11213775/pexels-photo-11213775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]),
    //     new Recipe('Cheese What What', 'This book includes recipes for any occasion', 'https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         [
    //             new Ingredient('Pasta', 1),
    //             new Ingredient('Cheese', 2)
    //         ])
    // ];

    private recipes: Recipe[] = [];
    recipeSelected = new Subject<Recipe>();
    emittedRecipes = new Subject<Recipe[]>();
    getRecipesNotNull = new Subject<boolean> ();

    // constructor(private dataStorageService: DataStorageService){}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.emittedRecipes.next(this.recipes.slice());
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.emittedRecipes.next(this.recipes);
    }
    getRecipes() {
    //    this.dataStorageService.fetchRecipes();
        return this.recipes.slice(); // returns a copy of the recipe 
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.emittedRecipes.next(this.recipes);
    }

    getRecipeByid(id: number) {
        return this.recipes[id];
    }
    editRecipe(id: number, recipe: Recipe) {
        this.recipes[id].name = recipe.name;
        this.recipes[id].description = recipe.description;
        this.recipes[id].imagePath = recipe.imagePath;
        this.recipes[id].ingredients = recipe.ingredients
        this.emittedRecipes.next(this.recipes);
    }
}