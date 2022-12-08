import { Injectable, EventEmitter, OnInit } from "@angular/core";

import { Ingredient } from "../shared/ingredrient.model";
@Injectable()

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients:Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatos',10)
      ];

      constructor(){
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

    
      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      getIngredients(){
        return this.ingredients.slice();
      }
}