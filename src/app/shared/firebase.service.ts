import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators'
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

	constructor(private firebaseServer: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }
	
	saveRecipes() {
		return this.firebaseServer.put('https://keto-kitchen.firebaseio.com/recipes.json', this.recipeService.getRecipes())
	}

	getRecipes() {
		const token = this.authService.getToken()
		return this.firebaseServer.get<Recipe[]>('https://keto-kitchen.firebaseio.com/recipes.json?auth=' + token)
		.pipe(map(
			(recipes) => {
				//const recipes: Recipe[] = response.json()
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
