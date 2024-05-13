import { Component } from '@angular/core';
import { FilterViewModel } from '../filter.model';

@Component({
  selector: 'app-desctop-filter',
  templateUrl: './desktop-filter.component.html',
  styleUrl: './desktop-filter.component.scss',
})
export class DesktopFilterComponent {

  constructor(
    protected filterModel: FilterViewModel
  ){

  }

}
