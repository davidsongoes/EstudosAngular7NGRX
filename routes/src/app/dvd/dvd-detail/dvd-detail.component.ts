import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { DvdService } from 'src/app/core/dvd.service';
import { Dvd } from 'src/app/models/dvd';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css'],
})
export class DvdDetailComponent implements OnInit {
  index: number | undefined;
  dvds$: Observable<Dvd[]> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dvdService: DvdService
  ) {}

  ngOnInit(): void {
    this.index = +this.activatedRoute.snapshot.paramMap.get('index')!;
    console.log(this.index);

    // Tipos de get dos parametros da rota
    console.log(
      'Index 1: ',
      this.activatedRoute.snapshot.paramMap.get('index')
    );
    this.activatedRoute.paramMap.subscribe((params: ParamMap) =>
      console.log('Index 2: ', params.get('index'))
    );
    console.log('Index 4: ', this.activatedRoute.snapshot.params['index']);
    this.activatedRoute.params.subscribe((params) =>
      console.log('Index 5: ', params.index)
    );
  }
}
