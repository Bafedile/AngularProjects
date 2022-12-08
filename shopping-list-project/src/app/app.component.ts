import { Component, Input } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [RecipeService]
})
export class AppComponent {
  title = 'shopping-list-project';
  shoppingLists;
  recipes=true;


  getDisplayValue(val: { dis: boolean, type: string }) {
    if (val.type === "recipe") {
      this.recipes = val.dis;
      this.shoppingLists = false;
    }
    if (val.type === "shoppinglist") {
      this.shoppingLists = val.dis;
      this.recipes= false;
    }
  }
}
