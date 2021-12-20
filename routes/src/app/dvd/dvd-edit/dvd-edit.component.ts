import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DvdService } from 'src/app/core/dvd.service';

@Component({
  selector: 'app-dvd-edit',
  templateUrl: './dvd-edit.component.html',
  styleUrls: ['./dvd-edit.component.css'],
})
export class DvdEditComponent implements OnInit {
  formDvd = this.fb.group({
    title: [''],
    year: [''],
    genre: [''],
  });
  constructor(
    private fb: FormBuilder,
    private dvdService: DvdService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.dvdService.add(this.formDvd.value);
    this.router.navigate(['/dvds']);
  }

  goBack(): void {
    this.router.navigate(['/dvds']);
  }
}
