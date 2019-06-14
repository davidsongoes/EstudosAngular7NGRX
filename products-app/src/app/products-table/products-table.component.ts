import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product-form/product.model';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable, {static: false})
  dataTable: MatTable<any>;

  products: Product[] = [];
  prodColumns: string[] = ['id', 'name', 'department', 'price', 'description'];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.onNewProduct.subscribe(() => {
      this.dataTable.renderRows()
    })
  }
}