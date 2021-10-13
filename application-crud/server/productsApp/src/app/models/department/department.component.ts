import { Component, OnInit } from '@angular/core';
import { Department } from './department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  depName = '';
  departments: Department[] = [
    { name: 'dep1', _id: '1' },
    { name: 'dep2', _id: '2' },
    { name: 'dep3', _id: '3' },
  ];

  constructor() {}

  ngOnInit(): void {}

  save(): void {
    console.log('save');
  }

  cancel(): void {
    console.log('cancel');
  }

  edit(dep: Department): void {
    console.log('Edit: ', dep);
  }

  delete(dep: Department): void {
    console.log('Delete: ', dep);
  }
}
