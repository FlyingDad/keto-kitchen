import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { RecipeService} from '../recipes/recipe.service'
import { FirebaseService } from '../shared/firebase.service';
import { AuthService } from '../auth/auth.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@NgModule ({
	declarations: [
		HeaderComponent,
		HomeComponent
	],
	imports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		SharedModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent,
		MatIconModule,
		MatCheckboxModule,
		MatCardModule
	],
	providers:[ShoppingListService, RecipeService, FirebaseService, AuthService]
  
})

export class CoreModule {}