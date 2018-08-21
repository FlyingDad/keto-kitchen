import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

  	private recipes = [
    new Recipe(
      "Mac-n-Cheese",
      "Everyones favorite meal",
			"http://assets.kraftfoods.com/recipe_images/opendeploy/52089_640x428.jpg",
			[
				new Ingredient('Elbow Macaroni', 16),
				new Ingredient('Cheddar Cheese', 8),
				new Ingredient('Cream', 1)
			]
    ),
    new Recipe(
      "Spaghetti and Cheese",
      "The trailer park version",
			"https://www.yellowblissroad.com/wp-content/uploads/2016/05/Creamy-Spaghetti-4.jpg",
			[
				new Ingredient('Great Value Spaghetti Noodles', 16),
				new Ingredient('Great Value Cheddar Cheese', 8),
				new Ingredient('Milk', 1)
			]
    )
  ];

	constructor(private shoppingListService: ShoppingListService) {}
	
	getRecipes() {
		// return copy of array so we are not returning reference to recipes, keeps recipes private
		return this.recipes.slice()
	}

	getRecipe(index: number) {
		return this.recipes[index]
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.shoppingListService.addIngredientsFromSelectedRecipe(ingredients)
	}
}
