import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})

export class RecipeListComponent implements OnInit, OnDestroy {

	//@Output() recipeWasSelected = new EventEmitter<Recipe>()
	subscription: Subscription
	recipies: Recipe[]

	constructor(private recipesService: RecipeService,
							private router: Router,
							private route: ActivatedRoute,) { }

  ngOnInit() {
		this.recipies = this.recipesService.getRecipes()
		this.subscription = this.recipesService.recipiesChanged.subscribe(
			(recipies: Recipe[]) => {
				this.recipies = recipies
			})
	}

	onNewRecipe() {
		this.router.navigate(['new'], {relativeTo: this.route})
	}
	
	// onRecipeSelected(recipe: Recipe){
	// 	this.recipeWasSelected.emit(recipe)
	// }

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}

}
