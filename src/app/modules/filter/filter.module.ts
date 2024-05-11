import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/modules/mat-module/mat-module/mat-module.module';
import { SharedComponentsModule } from '@shared/modules/shared-components/shared-components.module';
import { DesktopFilterComponent } from './desktop-filter/desktop-filter.component';



@NgModule({
  declarations: [
    DesktopFilterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedComponentsModule
  ],
  exports: [
    DesktopFilterComponent
  ]
})
export class FilterModule { }
