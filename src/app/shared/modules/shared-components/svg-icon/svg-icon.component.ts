import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent implements OnChanges {

  @Input() name?: string;
  protected  svgIcon: any;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ){

  }

  ngOnChanges(): void {
    if (!this.name) {
      this.svgIcon = '';
      return;
    }
    this.httpClient
      .get(`/assets/images/${this.name}.svg`, { responseType: 'text' })
      .subscribe( value => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
      })
  }

}
