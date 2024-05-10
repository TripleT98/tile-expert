import { NgModule } from "@angular/core";
import { ExpandDirective } from './expand.directive';

const directives = [
  ExpandDirective
]

@NgModule({
  imports: [

  ],
  declarations: [
    ...directives
  ],
  exports: [
    ...directives
  ]
})
export class DirectivesModule {}
