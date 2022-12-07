import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() displayRecipe;
  @Output() displayShoppingList;
  @Output() displayClicked = new EventEmitter<{dis:boolean,type:string}>();

  displayRecipes() {
    this.displayRecipe = true;
    this.displayShoppingList = false;
    this.displayClicked.emit({dis:this.displayRecipe,type:"recipe"});
  }

  displayShoppingLists() {
    this.displayRecipe = false;
    this.displayShoppingList = true;
    this.displayClicked.emit({dis:this.displayShoppingList,type:"shoppinglist"});
  }
  }



