import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DepartmentService } from 'src/app/core/department.service';
import { ProductService } from 'src/app/core/product.service';
import { Department } from '../department/department';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productForm: FormGroup = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    stock: [0, [Validators.required, Validators.min(0)]],
    price: [0, [Validators.required, Validators.min(0)]],
    departments: [[], Validators.required],
  });

  products: any[] = [];
  departments: Department[] = [];

  @ViewChild('form') form: NgForm | undefined;

  private unsubscribe: Subject<any> = new Subject<any>();

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.productService
      .get()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((products) => (this.products = products));
    this.departmentService
      .get()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((departments) => (this.departments = departments));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }

  save(): void {
    let data = this.productForm.value;
    if (data.id != null) {
      this.productService.update(data).subscribe(() => this.resetForm());
    } else {
      this.productService.add(data).subscribe(() => this.resetForm());
    }
  }

  cancel(): void {}

  onSubmit(): void {
    this.save();
  }

  edit(product: Product): void {
    this.productForm.setValue(product);
  }

  delete(product: Product): void {
    this.productService.delete(product).subscribe(
      () => this.notify('Deleted'),
      (err) => console.error(err)
    );
  }

  resetForm(): void {
    // this.productForm.reset();
    this.form?.resetForm();
    // this.productForm.clearValidators();
  }

  notify(messsage: string): void {
    this.snackBar.open(messsage, 'OK', { duration: 3000 });
  }
}
