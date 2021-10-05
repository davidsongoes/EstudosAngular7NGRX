import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  client: Client = {
    firstName: '',
    lastName: '',
    birth: new Date(),
    gender: '',
    state: '',
    street: '',
    city: '',
    phone1: '',
    phone2: '',
  };

  states = ['SP', 'DF', 'SC', 'RS', 'PE', 'MT']

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('submit');
    console.log(this.client);
  }
}
