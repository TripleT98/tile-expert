import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/mat-module/mat-module/mat-module.module';
import { SharedComponentsModule } from '@shared/modules/shared-components/shared-components.module';
import { DirectivesModule } from '@shared/modules/directives-module/directives.module';
import { FilterModule } from '@modules/filter/filter.module';
import { MainComponent } from './components/desktop/main.component';
import { MainMobileComponent } from './components/mobile/main-mobile.component';


@NgModule({
	imports: [
		MaterialModule,
    SharedComponentsModule,
    DirectivesModule,
    FilterModule,
	],
	declarations: [
		MainComponent,
    MainMobileComponent
	],
	exports: [
		MainComponent,
    MainMobileComponent
	]
})
export class MainModule {}
