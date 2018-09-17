import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import {RecipeService} from './recipes/recipe.service'
import { FirebaseService } from './shared/firebase.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent
  ],
  imports: [
		ShoppingListModule,
		BrowserModule,
		AppRoutingModule,
		HttpModule,
		SharedModule,
		AuthModule
  ],
  providers: [ShoppingListService, RecipeService, FirebaseService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
