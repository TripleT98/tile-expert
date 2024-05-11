import { Component } from '@angular/core';
import { FilterViewModel } from '../filter.model';

@Component({
  selector: 'app-desctop-filter',
  templateUrl: './desktop-filter.component.html',
  styleUrl: './desktop-filter.component.scss',
  providers: [FilterViewModel]
})
export class DesktopFilterComponent {

  constructor(
    private filterModel: FilterViewModel
  ){

  }



}
