import { Component, Input,Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
 res: Recipe;
  constructor() { }

  ngOnInit() { }
  getRecipes(recipe: Recipe) {
    this.res = recipe;
  }
}
