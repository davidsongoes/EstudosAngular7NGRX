import { Portal } from '@angular/cdk/portal';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Department } from '../models/department/department';
import { Product } from '../models/product/product';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly url = 'http://localhost:3000/products';
  private productSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  private loaded = false;

  constructor(
    private http: HttpClient,
    private departmentService: DepartmentService
  ) {}

  get(): Observable<Product[]> {
    if (!this.loaded) {
      combineLatest([
        this.http.get<Product[]>(`${this.url}`),
        this.departmentService.get(),
      ])
        .pipe(
          tap(([products, departments]) => console.log(products, departments)),
          filter(
            ([products, departments]) => products != null && departments != null
          ),
          map(([products, departments]) => {
            products.forEach((product) => {
              let ids = product.departments as number[];
              if (ids) {
                let deps = ids.map((id) =>
                  departments.find((dep) => dep.id == id)
                );
                product.departments = deps as Department[];
              }
            });
            return products;
          }),
          tap((products) => console.log(products))
        )
        .subscribe(this.productSubject$);
      this.loaded = true;
    }
    return this.productSubject$.asObservable();
  }

  add(data: Product): Observable<Product> {
    let departments = (data.departments as Department[]).map(
      (department) => department.id
    );
    return this.http
      .post<Product>(this.url, { ...data, departments })
      .pipe(
        tap((product) =>
          this.productSubject$.getValue().push({ ...product, id: product.id })
        )
      );
  }

  delete(data: Product): Observable<any> {
    return this.http.delete(`${this.url}/${data.id}`).pipe(
      tap(() => {
        let products = this.productSubject$.getValue();
        let i = products.findIndex((product) => product.id === data.id);
        if (i >= 0) {
          products.splice(i, 1);
        }
      })
    );
  }

  update(data: Product): Observable<Product> {
    let departments = (data.departments as Department[]).map(
      (department) => department.id
    );
    return this.http
      .patch<Product>(`${this.url}/${data.id}`, { ...data, departments })
      .pipe(
        tap(() => {
          let products = this.productSubject$.getValue();
          let i = products.findIndex((product) => product.id === data.id);
          if (i >= 0) {
            products[i] = data;
          }
        })
      );
  }

  getDepartmentsOfTheProducts(id: number): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.url}?departments=${id}`);
  }
}
