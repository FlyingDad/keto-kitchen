// import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { OnInit } from '../../../node_modules/@angular/core';
import { Subject } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService implements OnInit{

	ingredientsChanged = new Subject<Ingredient[]>()

	private ingredients: Ingredient[] = [
		new Ingredient('apples', 5),
		new Ingredient('tomatoes', 10),
	]

	constructor() { }

	ngOnInit () {
	}
	
	getIngredients() {
		return this.ingredients.slice()
	}

	onIngredientAdded(ingredient: Ingredient){
		//console.log(ingredient)
		this.ingredients.push(ingredient)
		//console.log(this.ingredients)
		this.ingredientsChanged.next(this.ingredients.slice())
	}

	addIngredientsFromSelectedRecipe(ingredients: Ingredient[]){
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next(this.ingredients.slice())
	}

}
