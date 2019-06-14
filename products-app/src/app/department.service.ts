import { Injectable } from '@angular/core';
import { Department } from './department-form/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departments: Department[] = [
    {id: 1, name: 'Clothings'},
    {id: 2, name: 'Books'},
    {id: 3, name: 'Eletronics'},
    {id: 4, name: 'Computers'}
  ];
private nextId: number = 5;

  constructor() { }


  public getDepartments(): Department[] {
    return this.departments;
  }

  public getDepartmentById(id: number): Department {
    return this.departments.find((department) =>  department.id === id)
  }

  public addDepartment(department: Department){
    this.departments.push({id: this.nextId++, ...department});
    console.log(this.departments)
  }
}
