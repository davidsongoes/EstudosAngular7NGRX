import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  
  clientForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      adress: this.fb.group({
        street: [''],
        city: [''],
        state: ['']
      }),
      phone: [''],
      children: this.fb.group({
        name: [''],
        age: ['']
      })
    })
  }

  onSubmit(): void {
    console.log(this.clientForm.value)
  }

}
