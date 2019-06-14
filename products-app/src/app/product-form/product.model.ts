import { Department } from '../department-form/department.model';

export interface Product {
    name: string;
    price: number;
    description: string;
    department: Department;
    id?: number;
}