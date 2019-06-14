import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild(TimerComponent, {static: false})
  private myTimer: TimerComponent

  @ViewChild('myTagP', {static: false})
  private myTagP: ElementRef

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.myTagP.nativeElement.innerHTML)
  }

  public start(): void {
    this.myTimer.start()

  }

  public stop(): void {
    this.myTimer.stop()
  }

  public clear(): void {
    this.myTimer.clear()
  }
}
