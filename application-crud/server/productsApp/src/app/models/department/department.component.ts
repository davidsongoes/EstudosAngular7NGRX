import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, Subject } from 'rxjs';
import { mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { DepartmentService } from 'src/app/core/department.service';
import { ProductService } from 'src/app/core/product.service';
import { Department } from './department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  depName = '';
  departments: Department[] = [];
  depEdit: any = '';
  private unsubscribe$: Subject<any> = new Subject();

  constructor(
    private departmentService: DepartmentService,
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.departmentService
      .get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => (this.departments = response));
  }

  save(): void {
    if (this.depEdit) {
      this.depEdit.name = this.depName;
      this.departmentService.add(this.depEdit).subscribe(
        (response) => {
          this.notify('Updated');
          this.clearFields();
          this.depEdit = null;
          console.log('save');
        },
        (err) => {
          this.notify('Error');
          console.error(err);
        }
      );
    } else {
      this.departmentService.add({ name: this.depName }).subscribe(
        (response) => {
          this.notify('Created');
          console.log(response);
        },
        (err) => console.log(err)
      );
      this.clearFields();
      this.notify('Inserted');
      console.log('save');
    }
  }

  cancel(): void {
    this.clearFields();
    console.log('cancel');
  }

  edit(dep: Department): void {
    console.log(dep);
    this.depName = dep.name;
    this.depEdit = dep;
  }

  delete(dep: Department) {
    if (dep.id) {
      let id = dep.id;
      this.productService
        .getDepartmentsOfTheProducts(id)
        .pipe(
          switchMap((department) =>
            department.length == 0
              ? this.departmentService.delete(dep)
              : of(false)
          )
        )
        .subscribe(
          (resp) => {
            if (resp == false) {
              this.notify(
                'Cannot delete, department is linked to one or more products!'
              );
            } else {
              this.notify('Deleted');
              console.log('Delete: ', dep);
            }
          },
          (err) => {
            this.notify('Error');
            console.error(err);
          }
        );
    }
  }

  clearFields(): void {
    this.depName = '';
  }

  notify(msg: string): void {
    this.snackBar.open(msg, 'OK', { duration: 3000 });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}
