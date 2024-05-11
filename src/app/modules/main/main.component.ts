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
  protected searchFiedStatus: AnimStatus = AnimStatus['stopped'];

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

  onExpand(status: AnimStatus){
    console.log(status)
    this.searchFiedStatus = status
  }

}
