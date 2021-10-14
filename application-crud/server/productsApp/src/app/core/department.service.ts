import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Department } from '../models/department/department';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  readonly url = 'http://localhost:3000/departments';

  private departmentSubject$: BehaviorSubject<any[]> = new BehaviorSubject<
    Department[]
  >([]);
  private loaded = false;

  constructor(private http: HttpClient) {}

  get(): Observable<Department[]> {
    if (!this.loaded) {
      this.http
        .get<Department[]>(this.url)
        .pipe(tap((response) => console.log(response)))
        .subscribe(this.departmentSubject$);
      this.loaded = true;
    }
    return this.departmentSubject$.asObservable();
  }

  add(data: Department): Observable<Department> {
    if (data.id) {
      return this.http.put<Department>(`${this.url}/${data.id}`, data);
    } else {
      return this.http
        .post<Department>(this.url, data)
        .pipe(
          tap((dep: Department) => this.departmentSubject$.getValue().push(dep))
        );
    }
  }

  delete(data: Department): Observable<any> {
    return this.http.delete(`${this.url}/${data.id}`).pipe(
      tap(() => {
        let departments = this.departmentSubject$.getValue();
        let i = departments.findIndex((d) => d.id === data.id);
        if (i >= 0) {
          departments.splice(i, 1);
        }
      })
    );
  }

  update(data: Department): Observable<Department> {
    return this.http.patch<Department>(`${this.url}/${data.id}`, data).pipe(
      tap((dep) => {
        let departments = this.departmentSubject$.getValue();
        let i = departments.findIndex((d) => d.id === data.id);
        if (i >= 0) {
          departments[i].name = dep.name;
        }
      })
    );
  }
}
