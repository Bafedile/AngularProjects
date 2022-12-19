import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredrient.model';
import { ShoppingListService } from './shoping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  addIngredient = false;
  private ingrSub: Subscription;
  constructor(private shoppingListService: ShoppingListService, private router: Router,

    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.router.navigate(['edit'], { relativeTo: this.route });
    this.ingrSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients });

  }

  onAddIngredient() {
    // if (this.addIngredient) {
    //   this.router.navigate(['./'], { relativeTo: this.route });
    // } else {
      this.router.navigate(['edit'], { relativeTo: this.route });
    // }
    // this.addIngredient = !this.addIngredient;
  }
  onEditItem(index: number) {
    this.shoppingListService.ingredientEdit.next(index);
  }
  ngOnDestroy(): void {
    this.ingrSub.unsubscribe();
  }
}
