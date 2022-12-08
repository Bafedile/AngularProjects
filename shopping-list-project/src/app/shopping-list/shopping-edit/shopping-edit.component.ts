import { Component,Output,EventEmitter,ViewChild ,ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredrient.model';
import { ShoppingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput')ingredientValue:ElementRef;
  @ViewChild('amountInput')amountInput:ElementRef;

constructor(private shoppingListService: ShoppingListService){}

onAddingIngredient(){
  this.shoppingListService.addIngredient(
    new Ingredient(this.ingredientValue.nativeElement.value,
      Number.parseInt(this.amountInput.nativeElement.value )));
    
}
}
