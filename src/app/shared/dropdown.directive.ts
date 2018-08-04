import { Directive, ElementRef, HostListener, HostBinding } from "../../../node_modules/@angular/core";

@Directive({
	selector: '[appDropdown]'
})

export class DropdownDirective {

	@HostBinding('class.open') dropdownOpen = false;

	@HostListener('click') toggleOpen() {
		this.dropdownOpen = !this.dropdownOpen
	}
}
