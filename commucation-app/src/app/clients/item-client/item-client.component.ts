import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.css']
})
export class ItemClientComponent implements OnInit {

  @Input() client: Client
  @Output() updateClientEvent: EventEmitter<Client> = new EventEmitter<Client>()
  @Output() deleteClientEvent: EventEmitter<any> = new EventEmitter<any>()

  onUpdate: boolean = false

  name: string = ''
  age: number = 0

  constructor() { }

  ngOnInit() {
  }

  public updateClick(): void {
    this.onUpdate = true
    this.name = this.client.name
    this.age = this.client.age
  }

  public deleteClick(): void {
    this.deleteClientEvent.emit()
  }

  public saveClick(): void {
    this.updateClientEvent.emit({name: this.name, age: this.age})
    this.onUpdate = false
    
  }
}
