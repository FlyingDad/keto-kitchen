import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	@ViewChild('nameInput') ingredientNameRef: ElementRef
	@ViewChild('amountInput') ingredientAmountRef: ElementRef
//	@Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
	}
	
	addIngredient() {
		// console.log(this.ingredientAmountRef.nativeElement.value, this.ingredientNameRef.nativeElement.value)
		const newIngredient = new Ingredient(this.ingredientNameRef.nativeElement.value, this.ingredientAmountRef.nativeElement.value)
		this.shoppingListService.onIngredientAdded(newIngredient)
		//this.ingredientAdded.emit(newIngredient)
	}

}
