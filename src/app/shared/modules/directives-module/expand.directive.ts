import { Directive, Input, Output, EventEmitter, Renderer2, OnInit } from "@angular/core";
import { Observable, fromEvent, Subscription, merge } from "rxjs";
import { map, filter, take } from 'rxjs/operators';


@Directive({
  selector: '[expandedItem]'
})
export class ExpandDirective implements OnInit {

  private expandSubscriber!: Subscription;
  private processStatus: AnimStatus = AnimStatus["stopped"];
  private expandAnimationInterval!: NodeJS.Timeout;
  private readonly step = 8;
  private initialWidth!: number;
  private currWidth!: number;


  private _expandTo!: HTMLElement;
  private _expandedItem!: HTMLElement;
  private _expandTrigger!: HTMLElement;
  private _triggerEvent!: string;


  @Input()
  set expandedItem(element: HTMLElement){
    this.initialWidth = element.getBoundingClientRect().width;
    this._expandedItem  = element;
  }

  @Input()
  set expandTo(element: HTMLElement){
    this._expandTo = element;
  }

  @Input()
  set expandTrigger(element: HTMLElement){
    this._expandTrigger = element;
  }

  @Input()
  set triggerEvent(event: string){
    this._triggerEvent = event;
  }

  @Output() statusChange = new EventEmitter<AnimStatus>();
  @Output() expandStatusChange = new EventEmitter<boolean>();

  constructor(
    private renderer2: Renderer2,
  ){

  }

  ngOnInit(): void {
    if (!this._expandTo || !this._expandedItem || !this._expandTrigger || !this._triggerEvent){
      console.warn("Не хватает некотрох составляющих");
      return;
    }
    this.listenTrigger();
  }

  private listenTrigger(){
    this.expandSubscriber?.unsubscribe();
    this.expandSubscriber = fromEvent(this._expandTrigger, this._triggerEvent).subscribe(event => {
      this.setAnimStatus(AnimStatus["forward"])
      this.expand()
      setTimeout(() => fromEvent(window, 'click').pipe(
        filter(event => {
          const target = event.target;
          const isContains = this._expandedItem.contains(event.target as any);
          return !isContains;
        }),
        take(1)
      )
      .subscribe(event => {
        this.setAnimStatus(AnimStatus["backward"])
        this.expand()
      }), 100)
    })
  }

  private expand(){
    if (this.expandAnimationInterval) {
      clearInterval(this.expandAnimationInterval);
    }
    const {width, x} = this._expandTo.getBoundingClientRect();
    const {x: targetX, width: targetWidth} = this._expandedItem.getBoundingClientRect();
    let x1: number;
    if (this.processStatus === AnimStatus["forward"]) {
      x1 = x + width;
    } else {
      x1 = targetX + targetWidth;
    }
    const x2 = targetX;
    const dx = x2 - x1;
    this.expandAnimationInterval = setInterval(() => {
      let newWidth: number;
      if (this.processStatus === AnimStatus["forward"]) {
        newWidth = (this.currWidth ?? targetWidth) + this.step;
      } else {
        newWidth = (this.currWidth ?? targetWidth) - this.step;
      }
      this.renderer2.setStyle(this._expandedItem, 'width', `${newWidth}px`);
      this.currWidth = newWidth;
      const {x: newX} = this._expandedItem.getBoundingClientRect();
      if (newX <= (x1 + 16) && this.processStatus === AnimStatus["forward"]) {
        clearInterval(this.expandAnimationInterval);
        this.setAnimStatus(AnimStatus["stopped"]);
      } else if (newWidth <= this.initialWidth && this.processStatus === AnimStatus["backward"]) {
        clearInterval(this.expandAnimationInterval);
        this.setAnimStatus(AnimStatus["stopped"]);
      }
    }, 2)
  }

  private setAnimStatus(status: AnimStatus){
    if (this.processStatus === AnimStatus["forward"] && status === AnimStatus["stopped"]) {
      this.expandStatusChange.emit(true);
    } else if (this.processStatus === AnimStatus["backward"] && status === AnimStatus["stopped"]) {
      this.expandStatusChange.emit(false);
    }
    this.processStatus = status;
    this.statusChange.emit(this.processStatus);

  }

}

export enum AnimStatus {
  "forward" = 1,
  "stopped" = 0,
  "backward"= -1,
};
