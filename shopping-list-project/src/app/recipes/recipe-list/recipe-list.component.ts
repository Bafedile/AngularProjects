import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/5717409/pexels-photo-5717409.jpeg'),
    new Recipe('A30 Minute Meals: Quick and Easy Recipes', 'This book includes recipes for any occasion', 'https://media.takealot.com/covers_isbn/9781515196471-pdpxl.jpg')
  ];

  @Output() sendRecipe = new EventEmitter<Recipe>();

  onRecipeSelected(res: Recipe) {
    this.sendRecipe.emit(res);
  }

}
