import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected currentScreenSize!: string;

  protected readonly displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
  ]);

  constructor(
    protected breakpointObserver: BreakpointObserver
  ){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      for(let query of Object.keys(result.breakpoints)){
        const val =  this.displayNameMap.get(query);
        if (val && result.breakpoints[query]) {
          this.currentScreenSize = val;
        }
      }
    })
  }

}
