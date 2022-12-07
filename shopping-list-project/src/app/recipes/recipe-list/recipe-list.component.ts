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
    new Recipe('Another Test Recipe', 'This is simply another test', 'https://images.pexels.com/photos/5717409/pexels-photo-5717409.jpeg')
  ];

  @Output() sendRecipe = new EventEmitter<Recipe>();

  onRecipeSelected(res: Recipe) {
    this.sendRecipe.emit(res);
  }

}
