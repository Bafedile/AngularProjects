import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://images.pexels.com/photos/5717409/pexels-photo-5717409.jpeg'),
    new Recipe('A Test Recipe','This is simply a test','https://images.pexels.com/photos/5717409/pexels-photo-5717409.jpeg')
  ];
  
}
