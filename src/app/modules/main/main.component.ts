import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NavBarItem } from '@shared/models/nav-bar-item.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit {

  @ViewChild('titleCont') titleContainer!: ElementRef;

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

}
