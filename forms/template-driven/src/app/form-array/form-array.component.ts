import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  clientForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    adress: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
    }),
    phones: this.fb.array([]),
    childrens: this.fb.array([]),
  });
  phones = this.clientForm.get('phones') as FormArray;
  childrens = this.clientForm.get('childrens') as FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.addPhone();
    // this.addChild();
  }

  onSubmit(): void {
    console.log(this.clientForm.value);
  }

  addPhone(): void {
    this.phones.push(this.fb.control(''));
  }

  addChild(): void {
    this.childrens.push(
      this.fb.group({
        name: [''],
        age: [''],
      })
    );
  }
}
