import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-main-life-cycle',
  templateUrl: './main-life-cycle.component.html',
  styleUrls: ['./main-life-cycle.component.css']
})
export class MainLifeCycleComponent implements OnInit {

  private name: string = ''
  private age: number = null
  private food: string = ''
  private clients: Client[] = []
  private foods: string[] = ['X-Burger', 'X-Bacon', 'X-Pepperoni']
  private editClient: Client = null

  constructor() { }

  ngOnInit() {
  }

  public save(): void {
    if(this.editClient == null) {
      this.clients.push({name: this.name, age: this.age, food: this.food})
    }
    this.name = ''
    this.age = null
    this.food = ''
  }
}