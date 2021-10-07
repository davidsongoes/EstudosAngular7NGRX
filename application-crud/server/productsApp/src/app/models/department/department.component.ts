import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  depName = '';

  constructor() {}

  ngOnInit(): void {}

  save(): void {
    console.log('save');
  }

  cancel(): void {
    console.log('cancel');
  }
}
