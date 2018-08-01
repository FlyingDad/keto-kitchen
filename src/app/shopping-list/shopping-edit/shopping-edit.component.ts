import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	@ViewChild('nameInput') ingredientNameRef: ElementRef
	@ViewChild('amountInput') ingredientAmountRef: ElementRef
	@Output() ingredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {
	}
	
	addIngredient() {
		// console.log(this.ingredientAmountRef.nativeElement.value, this.ingredientNameRef.nativeElement.value)
		const newIngredient = new Ingredient(this.ingredientNameRef.nativeElement.value, this.ingredientAmountRef.nativeElement.value)
		this.ingredientAdded.emit(newIngredient)
	}

}
