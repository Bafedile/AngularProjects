import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shoping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private shoppingListService: ShoppingListService, private recipesService: RecipeService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // this.recipesService.getRecipeByid(+this.route.snapshot.params['id']);
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.recipe = this.recipesService.getRecipeByid(this.id);
    })
  }

  addToShoppingList() {
    for (let ingredient of this.recipe.ingredients) { this.shoppingListService.addIngredient(ingredient); }
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
