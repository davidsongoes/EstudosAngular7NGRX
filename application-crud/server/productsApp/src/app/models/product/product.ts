import { Department } from '../department/department';

export interface Product {
  name: string;
  stock: number;
  price: number;
  departments: Department[];
  _id?: string;
}
