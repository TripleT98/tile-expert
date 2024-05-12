import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavBarItem } from '@shared/models/nav-bar-item.model';
import { AnimStatus } from '@shared/modules/directives-module/expand.directive';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit {

  @ViewChild('titleCont') titleContainer!: ElementRef;

  protected readonly searchForm = new FormControl(null);
  protected animationStatus: AnimStatus = AnimStatus['stopped'];
  protected isExpanded: boolean = false;
  protected showDropdownPanel: boolean = false;

  protected searchPlaceholder: string = "Поисковый запрос";

  protected navBarItems: NavBarItem[] = [
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

  ngAfterViewInit(){
  }

  protected onExpandStatusChanges(status: boolean){
    this.isExpanded = status;
  }

  protected onAnimStatusChanges(status: AnimStatus){
    this.animationStatus = status;
    if (status === AnimStatus["backward"]) {
      this.closeDropdown();
    }
  }

  protected openDropdown(){
    if (!this.isExpanded || this.showDropdownPanel){
      return;
    }
    this.showDropdownPanel = true;
  }

  protected closeDropdown(){
    this.showDropdownPanel = false;
  }

}
