import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title: string
  @Output() incDesc: EventEmitter<number> = new EventEmitter<number>()
  
  constructor() { }

  ngOnInit() {
  }

  public incDescClick(n): void {
    this.incDesc.emit(n)
  }
}
