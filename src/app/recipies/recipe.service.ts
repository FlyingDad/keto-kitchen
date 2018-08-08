// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

import { Recipe } from "./recipe.model";
import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>()

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

	constructor() {}
	
	getRecipes() {
		// return copy of array so we are not returning reference to recipes, keeps recipes private
		return this.recipes.slice()
	}
}
