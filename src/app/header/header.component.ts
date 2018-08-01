import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: []
})
export class HeaderComponent implements OnInit {

	@Output() nav: EventEmitter<string> = new EventEmitter()

	constructor() { }

	ngOnInit(): void { }

	onNav(link: string){
		this.nav.emit(link)
	}
}
