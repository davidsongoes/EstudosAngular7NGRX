import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  value: number = 0
  title: string = 'Botões de Ação'

  constructor() { }

  ngOnInit() {
  }

  public actionEvent(n: number): void {
    if(n < 0){
      this.value -= -n
    }else{
      this.value += n
    }
  }
}