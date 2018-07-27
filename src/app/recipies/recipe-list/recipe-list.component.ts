import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

	recipies: Recipe[] = [
		new Recipe('Mac-n-Cheese', 'Everyones favorite meal', 'http://assets.kraftfoods.com/recipe_images/opendeploy/52089_640x428.jpg'),
		new Recipe('Mac-n-Cheese', 'Everyones favorite meal', 'http://assets.kraftfoods.com/recipe_images/opendeploy/52089_640x428.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

}
