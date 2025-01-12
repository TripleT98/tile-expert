import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/modules/mat-module/mat-module/mat-module.module';
import { AppComponent } from './app.component';
import { MainModule } from './modules/main/main.module';
import { FilterModule } from '@modules/filter/filter.module';

@NgModule({
	imports: [
		MaterialModule,
    MainModule,
		BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FilterModule
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
