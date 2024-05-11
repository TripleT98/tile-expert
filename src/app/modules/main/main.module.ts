import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/mat-module/mat-module/mat-module.module';
import { SharedComponentsModule } from '@shared/modules/shared-components/shared-components.module';
import { DirectivesModule } from '@shared/modules/directives-module/directives.module';
import { FilterModule } from '@modules/filter/filter.module';
import { MainComponent } from './main.component';


@NgModule({
	imports: [
		MaterialModule,
    SharedComponentsModule,
    DirectivesModule,
    FilterModule,
	],
	declarations: [
		MainComponent
	],
	exports: [
		MainComponent
	]
})
export class MainModule {}
