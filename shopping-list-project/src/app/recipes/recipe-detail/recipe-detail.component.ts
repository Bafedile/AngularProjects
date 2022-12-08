import { Component, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shoping-list.service';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  addToShoppingList() {
    for (let ingredient of this.recipe.ingredients) { this.shoppingListService.addIngredient(ingredient); }

  }

}
