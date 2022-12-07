import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredrient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingredients:Ingredient[] = [
  new Ingredient('Apples',5),
  new Ingredient('Tomatos',10)
];
constructor(){}

ngOnInit(){}

onAddedIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
}
}
