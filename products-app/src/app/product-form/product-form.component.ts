import { Component, OnInit } from '@angular/core';
import { Department } from '../department-form/department.model';
import { DepartmentService } from '../department.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string = '';
  department: Department;
  price: number = 0;
  description: string = '';
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService, private productService: ProductService) { }

  ngOnInit() {
    this.departments = this.departmentService.getDepartments();
  }

  public save(): void {
    this.productService.addProduct({name: this.name, department: this.department, price: this.price, description: this.description});
    this.clear()
  }

  public clear(): void {
    this.name = '';
    this.price = 0;
    this.department = null;
    this.description = '';
  }
}