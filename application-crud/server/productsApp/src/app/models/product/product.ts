import { NgIterable } from '@angular/core';
import { Department } from '../department/department';

export interface Product {
  name: string;
  stock: number;
  price: number;
  departments: Department[] | number[];
  id?: string;
}
