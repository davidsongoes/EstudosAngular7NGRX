import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EletronicService } from 'src/app/core/eletronic.service';
import { Eletronic } from 'src/app/models/eletronic';

@Component({
  selector: 'app-eletronics-detail',
  templateUrl: './eletronics-detail.component.html',
  styleUrls: ['./eletronics-detail.component.css'],
})
export class EletronicsDetailComponent implements OnInit {
  electronic$: Observable<Eletronic | null> =
    new Observable<Eletronic | null>();

  constructor(
    private eletronicService: EletronicService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let index = +this.activatedRoute.snapshot.paramMap.get('index')!;
    this.electronic$ = this.eletronicService.get(index);
  }

  back(): void {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}
