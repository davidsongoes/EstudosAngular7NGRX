import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  firstName = new FormControl('Davidson');
  lastName = new FormControl('Góes');

  constructor() { }

  ngOnInit(): void {
    this.firstName.valueChanges.subscribe((newName) => console.log('Novo Nome: ', newName))
  }

  setFirstName(): void {
    this.firstName.setValue('Fabiana');
  }

}
