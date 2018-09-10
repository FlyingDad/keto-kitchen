import { Component } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: []
})
export class HeaderComponent{

	constructor(private firebaseService: FirebaseService){}

	saveRecipes() {
		this.firebaseService.saveRecipes().subscribe(
			(data) => {
				console.log('Save Recipes: ' + data.statusText)
			}
		)
	}

	getRecipes() {
		this.firebaseService.getRecipes()
		// .subscribe(
		// 	(recipes) => {
		// 		//console.log(recipes)
		// 		this.recipeService.updateRecipesFromServer(recipes)
		// 	}
		// )
	}

}
