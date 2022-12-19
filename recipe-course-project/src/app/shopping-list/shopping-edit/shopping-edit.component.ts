import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredrient.model';
import { ShoppingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export default class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') f: NgForm;
  editedItemIndex: number;
  subscription: Subscription;
  editable: boolean = false;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientEdit.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editable = true;
      this.editedItem = this.shoppingListService.getIngredientEditItem(index);
      this.f.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
      this.router.navigate(['./'], { relativeTo: this.route });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.editable = false;
    this.f.reset();
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(new Ingredient(
      this.f.value.name,
      this.f.value.amount
    ));
    this.f.reset();
    this.router.navigate(['./'], { relativeTo: this.route });
    this.editable = false;
  }
  onAdditem() {

    if (this.editable) {
      this.shoppingListService.editIngredient(new Ingredient(
        this.f.value.name,
        this.f.value.amount
      ), this.editedItemIndex);
    } else {
      this.shoppingListService.addIngredient(new Ingredient(
        this.f.value.name,
        this.f.value.amount
      ));
    }

    this.f.reset();
  }
}
