import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-property',
  templateUrl: './event-property.component.html',
  styleUrls: ['./event-property.component.css']
})
export class EventPropertyComponent implements OnInit {


  inputName: string = 'Davidson'
  constructor() { }

  ngOnInit() {
  }

  public inputEvent(event): void {
    this.inputName = event.target.value
    console.log(event.target.value)
  }
}
