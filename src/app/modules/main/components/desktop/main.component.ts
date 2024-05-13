import { Component } from '@angular/core';
import { MainComponentViewModel } from '../../main.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(
    protected mainVM: MainComponentViewModel
  ){
  }

}
