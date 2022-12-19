import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [RecipeService]
})
export class AppComponent implements OnInit {
  title = 'shopping-list-project';
  shoppingLists;
  recipes = true;

  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.autoLogin();
  }
}
