import { Injectable, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';
import { NavBarItem } from '@shared/models/nav-bar-item.model';
import { AnimStatus } from '@shared/modules/directives-module/expand.directive';

@Injectable({
  providedIn: 'root'
})
export class MainComponentViewModel {

  public readonly searchForm = new FormControl(null);
  public animationStatus: AnimStatus = AnimStatus['stopped'];
  public isExpanded: boolean = false;
  public showDropdownPanel: boolean = false;

  public searchPlaceholder: string = "Поисковый запрос";
  public mobileSearchPlaceholder: string = "Поиск";

  public navBarItems: NavBarItem[] = [
    {
      name: 'Ссылки',
      iconName: 'link'
    },
    {
      name: 'Контакты',
      iconName: 'contact'
    },
    {
      name: 'Теги',
      iconName: 'tag'
    },
    {
      name: 'Избранное',
      iconName: 'favourite'
    },
    {
      name: 'Посещения',
      iconName: 'visit'
    },
  ];

  constructor(

  ){
  }

  public onExpandStatusChanges(status: boolean){
    this.isExpanded = status;
  }

  public onAnimStatusChanges(status: AnimStatus){
    this.animationStatus = status;
    if (status === AnimStatus["backward"]) {
      this.closeDropdown();
    }
  }

  public openDropdown(){
    if (!this.isExpanded || this.showDropdownPanel){
      return;
    }
    this.showDropdownPanel = true;
  }

  public closeDropdown(){
    this.showDropdownPanel = false;
  }

}
