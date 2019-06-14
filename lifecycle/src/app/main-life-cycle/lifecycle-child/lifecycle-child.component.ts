import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChange, SimpleChanges, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterViewInit {

  @Input() name: string
  @Input() age: number
  @Input() food: string

  constructor() {
    console.log(this.name + ' - constructor()')
  }

  ngOnInit() {
    console.log(this.name + ' - ngOnInit()')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.name + ' - ngOnChanges()')
  }

  ngAfterContentInit() {
    console.log(this.name + ' - ngAfterContentInit()')
  }
  ngAfterViewInit() {
    console.log(this.name + ' - ngAfterViewInit()')
  }

  ngOnDestroy() {
    console.log(this.name + ' - ngOnDestroy()')
  }

}
