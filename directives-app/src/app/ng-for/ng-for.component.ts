import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names: string[] = ['Davidson', 'Fabiana', 'Davi', 'Arlete']

  cities: any[] = [
    { name: "Brasília", state: "Distrito Federal",  uf: 'DF'},
    { name: "São Paulo", state: "São Paulo",  uf: 'SP'},
    { name: "Rio de Janeiro", state: "Rio de Janeiro",  uf: 'RJ'},
    { name: "Recife", state: "Pernambuco",  uf: 'PE'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
