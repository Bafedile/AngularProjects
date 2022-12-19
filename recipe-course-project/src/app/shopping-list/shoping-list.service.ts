import { Injectable, EventEmitter, OnInit } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredrient.model";
@Injectable()

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientEdit = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  constructor() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  editIngredient(ingredient: Ingredient, index: number) {
    this.ingredients[index].name = ingredient.name;
    this.ingredients[index].amount = ingredient.amount;
  }

  deleteIngredient(ingredient: Ingredient) {
    for (let ingr of this.ingredients) {
      if (ingr.name === ingredient.name) {
        this.ingredients.splice(this.ingredients.indexOf(ingr),1);
      }
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredientEditItem(index: number) {
    return this.ingredients[index];
  }
  
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}