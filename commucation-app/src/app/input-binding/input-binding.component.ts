import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string
  @Input('ultimoNome') lastName: string

  clients: Client[]


  constructor() {
    this.clients = [
      {id: 1, name: 'Davidson' , age: 32},
      {id: 2, name: 'Fabina' , age: 28},
      {id: 3, name: 'Davi' , age: 1},
      {id: 4, name: 'Arlete' , age: 50}
    ]
   }

  ngOnInit() {
  }

}
