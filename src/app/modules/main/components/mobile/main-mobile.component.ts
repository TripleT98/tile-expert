import { Component, OnDestroy } from '@angular/core';
import { MainComponentViewModel } from '../../main.model';

@Component({
  selector: 'app-main-mobile',
  templateUrl: './main-mobile.component.html',
  styleUrls: ['./../desktop/main.component.scss', './main-mobile.component.scss']
})
export class MainMobileComponent implements OnDestroy{

  constructor(
    protected mainVM: MainComponentViewModel
  ){
  }

  ngOnDestroy(): void {
    this.mainVM.closeDropdown();
    this.mainVM.onExpandStatusChanges(false);
  }

}
