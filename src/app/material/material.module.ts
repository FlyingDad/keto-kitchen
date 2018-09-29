import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
		CommonModule,
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatIconModule,
		MatToolbarModule,
		MatIconModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatIconModule,
		MatToolbarModule,
		MatIconModule
	],
  declarations: []
})
export class MaterialModule { }
