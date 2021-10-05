import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl('Davidson'),
    lastName: new FormControl('Góes'),
    name: new FormGroup({
      firstName: new FormControl('Davidson'),
      lastName: new FormControl('Góes')
    })
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("Submit: ", this.clientForm.value)
    console.log(`FirstName: ${this.clientForm.value.firstName}`)
    console.log(`LastName: ${this.clientForm.value.lastName}`)
    console.log(`Name - FirstName: ${this.clientForm.value.name.firstName}`)
    console.log(`Name - LastName: ${this.clientForm.value.name.lastName}`)
  }
}
