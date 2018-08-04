import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

	@Output() recipies: Recipe[] = [
		new Recipe('Mac-n-Cheese', 'Everyones favorite meal', 'http://assets.kraftfoods.com/recipe_images/opendeploy/52089_640x428.jpg'),
		new Recipe('Spaghetti and Cheese', 'The trailer park version', 'https://www.yellowblissroad.com/wp-content/uploads/2016/05/Creamy-Spaghetti-4.jpg')
	];

	@Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
	}
	
	onRecipeSelected(recipe: Recipe){
		this.recipeWasSelected.emit(recipe)
	}

}
