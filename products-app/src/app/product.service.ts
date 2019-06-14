import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './product-form/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {id: 1, name: 'Rice', description: 'Type 1', department: this.departmentService.getDepartmentById(1), price: 30}
  ];
  id: number = 2
  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>()

  constructor(private departmentService: DepartmentService) { }

  public getProducts(): Product[] {
    return this.products;
  }

  public addProduct(product: Product): void {
    this.products.push({id: this.id++, ...product});
    this.onNewProduct.emit()
  }
}