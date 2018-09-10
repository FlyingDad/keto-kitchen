import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators'
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

	constructor(private firebaseServer: Http, private recipeService: RecipeService) { }
	
	saveRecipes() {
		return this.firebaseServer.put('https://keto-kitchen.firebaseio.com/recipes.json', this.recipeService.getRecipes())
	}

	getRecipes() {
		return this.firebaseServer.get('https://keto-kitchen.firebaseio.com/recipes.json')
		.pipe(map(
			(response: Response) => {
				const recipes: Recipe[] = response.json()
				// make sure there is an ingredient list if one doesn't exist
				for(let recipe of recipes) {
					if(!recipe['ingredients']) {
						recipe['ingredients'] = []
					}
				}
				return recipes
			}
		))
		.subscribe(
			(recipes: Recipe[]) => {
				//console.log(recipes)
				this.recipeService.updateRecipesFromServer(recipes)
			}
		)
		
	}
}
