import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users: any[] = [
    {login: 'davidson', role: 'admin', lastLogin: new Date('02/01/2018')},
    {login: 'fabiana', role: 'admin', lastLogin: new Date('05/05/2018')},
    {login: 'arlete', role: 'user', lastLogin: new Date('08/08/2018')},
    {login: 'davi', role: 'user', lastLogin: new Date('10/10/2018')}
  ] 

  constructor() { }

  ngOnInit() {
  }

}
