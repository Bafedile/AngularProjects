import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.dataStorageService.fetchRecipes().subscribe();
    this.recipeService.emittedRecipes.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    if (this.recipes.length < 1) {
      this.recipeService.getRecipesNotNull.next(false);
    }else{
      this.recipeService.getRecipesNotNull.next(true);
    }
  }

  onAddNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }



}
