import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DvdService } from '../core/dvd.service';
import { Dvd } from '../models/dvd';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css'],
})
export class DvdComponent implements OnInit {
  dvds$: Observable<Dvd[]> | undefined;

  constructor(private dvdService: DvdService, private router: Router) {}

  ngOnInit(): void {
    this.dvds$ = this.dvdService.dvds$;
  }
  goDetails(index: number, data: Dvd): void {
    this.router.navigate([`dvds/${index}`, { title: data.title }]);
  }

  remove(index: number): void {
    this.dvdService.remove(index);
  }
}
