import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { RecipeService} from '../recipes/recipe.service'
import { FirebaseService } from '../shared/firebase.service';
import { AuthService } from '../auth/auth.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { FooterComponent } from './footer/footer.component';

@NgModule ({
	declarations: [
		HeaderComponent,
		HomeComponent,
		FooterComponent
	],
	imports: [
		SharedModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent,
		FooterComponent
	],
	providers:[ShoppingListService, RecipeService, FirebaseService, AuthService]
  
})

export class CoreModule {}