import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
	
	feature = 'recipes'
	
	ngOnInit(): void {
		firebase.initializeApp({
			apiKey: "AIzaSyAOirkaV8_t2J1jpK_sjlz3sfWr57W2iw4",
    	authDomain: "keto-kitchen.firebaseapp.com"
		})
	}

	onNav(feature: string){
		this.feature = feature
	}
}
