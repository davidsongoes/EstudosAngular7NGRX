import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  clientForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    adress: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
    })
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   
  }

  onSubmit(): void{
    console.log(this.clientForm.value)
  }

}
