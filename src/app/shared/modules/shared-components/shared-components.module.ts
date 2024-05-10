import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/modules/mat-module/mat-module/mat-module.module';
import { SvgIconComponent } from './svg-icon/svg-icon.component';


@NgModule({
  imports: [
    MaterialModule
  ],
  declarations: [
    SvgIconComponent
  ],
  exports: [
    SvgIconComponent
  ]
})
export class SharedComponentsModule {}
