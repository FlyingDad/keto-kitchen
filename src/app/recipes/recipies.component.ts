import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
	styleUrls: ['./recipies.component.css'],
	providers: [RecipeService]
})

export class RecipiesComponent implements OnInit {

	selectedRecipe: Recipe

  constructor(private recipiesService: RecipeService) { }

  ngOnInit() {
		this.recipiesService.recipeSelected.subscribe(
			(recipe: Recipe) => {
				this.selectedRecipe = recipe
			}
		)
  }

}