import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name: string = ''
  age: number = 0

  clients: Client[] = []

  constructor() { }

  ngOnInit() {
  }

  public save(): void {
    this.clients.push(
      {name: this.name, age: this.age}
    )
    this.name = ''
    this.age = 0
  }

  public destroyClient(i): void {
    console.log(i)
    this.clients.splice(i, 1)
  }

  public editClient(client: Client, i): void{
    this.clients[i].name = client.name
    this.clients[i].age = client.age
  }
}
