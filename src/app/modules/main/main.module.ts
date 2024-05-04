import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/mat-module/mat-module/mat-module.module';
import { MainComponent } from './main.component';

@NgModule({
	imports: [
		MaterialModule
	],
	declarations: [
		MainComponent
	],
	exports: [
		MainComponent
	]
})
export class MainModule {}