import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatToolbarModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
		CommonModule,
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatIconModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatIconModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule
	],
  declarations: []
})
export class MaterialModule { }
