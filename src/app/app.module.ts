import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@shared/modules/mat-module/mat-module/mat-module.module';
import { AppComponent } from './app.component';
import { MainModule } from './modules/main/main.module';

@NgModule({
	imports: [
		MaterialModule,
        MainModule,
		BrowserModule
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}