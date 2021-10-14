import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DepartmentService } from 'src/app/core/department.service';
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
    // this.departmentService.add(dep).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (err) => console.log(err)
    // );
    // this.clearFields();
    // console.log('Edit: ', dep);
  }

  delete(dep: Department): void {
    this.departmentService.delete(dep).subscribe(
      () => {
        this.notify('Deleted');
        console.log('Delete: ', dep);
      },
      (err) => {
        this.notify('Error');
        console.error(err);
      }
    );
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
