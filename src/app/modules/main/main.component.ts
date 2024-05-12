import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavBarItem } from '@shared/models/nav-bar-item.model';
import { AnimStatus } from '@shared/modules/directives-module/expand.directive';
import { ResizeBreakPoint } from '@shared/models/resize.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

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

  ngOnInit(): void {
    const resizeObs = new ResizeObserver((data: ResizeObserverEntry[]) => {
      this.observeResize(data);
    });
    resizeObs.observe(document.body)
  }

  private observeResize(resizeData: ResizeObserverEntry[]){
    const data = resizeData[0];
    const { width } = data.contentRect;

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
