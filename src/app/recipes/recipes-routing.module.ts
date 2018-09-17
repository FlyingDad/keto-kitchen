import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuardService } from "../auth/auth-guard.service";
import { RecipiesComponent } from "./recipies.component";
import { Routes, RouterModule } from '@angular/router';

const recipeRoutes: Routes = [
	{ path: '', component: RecipiesComponent, children: [
		{ path: '' , component: RecipeStartComponent},
		{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService]},
		{ path: ':id' , component: RecipeDetailComponent},
		{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService]}
	]},
]

@NgModule({
	declarations: [],
	imports: [ 
		CommonModule,
		RouterModule.forChild(recipeRoutes)
	],
	exports: [ 
		RouterModule
	],
	providers: [],
})
export class RecipesRoutingModule {}