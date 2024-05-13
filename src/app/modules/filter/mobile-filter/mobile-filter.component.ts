import { Component } from '@angular/core';
import { MainComponentViewModel } from '@modules/main/main.model';
import { FilterViewModel } from '../filter.model';

@Component({
  selector: 'app-mobile-filter',
  templateUrl: './mobile-filter.component.html',
  styleUrls: ['./mobile-filter.component.scss', ]
})
export class MobileFilterComponent {

  constructor(
    protected filterModel: FilterViewModel,
    protected mainVM: MainComponentViewModel,
  ){

  }

}
