import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
		AppComponent
  ],
  imports: [
		BrowserAnimationsModule,
		HttpClientModule,
		ShoppingListModule,
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		AuthModule,
		CoreModule
  ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
