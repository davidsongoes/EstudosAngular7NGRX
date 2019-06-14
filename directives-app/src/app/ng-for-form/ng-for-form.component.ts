import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string = ''
  address: string = ''
  city: string = ''
  phone: string = ''
  age: number = 0

  cities: any[] = [
    { id: 1, name: "Brasília", state: "Distrito Federal",  uf: 'DF'},
    { id: 2, name: "São Paulo", state: "São Paulo",  uf: 'SP'},
    { id: 3, name: "Rio de Janeiro", state: "Rio de Janeiro",  uf: 'RJ'},
    { id: 4, name: "Recife", state: "Pernambuco",  uf: 'PE'}
  ]

  clients: any[] = []

  constructor() { }

  ngOnInit() {
    
  }

  public save(): void {
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        city: this.city,
        phone: this.phone,
        age: this.age
      }
    )
    this.cancel()
    console.log(this.clients)
  }

  public cancel() {
    this.name = ''
    this.address = ''
    this.city = ''
    this.phone = ''
    this.age = 0
  }

  public destroy(i) {
    this.clients.splice(i, 1)
  }
}