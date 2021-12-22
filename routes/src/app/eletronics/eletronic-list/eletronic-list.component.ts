import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EletronicService } from 'src/app/core/eletronic.service';
import { Eletronic } from 'src/app/models/eletronic';

@Component({
  selector: 'app-eletronic-list',
  templateUrl: './eletronic-list.component.html',
  styleUrls: ['./eletronic-list.component.css'],
})
export class EletronicListComponent implements OnInit {
  eletronics$: Observable<Eletronic[] | null> = new Observable<
    Eletronic[] | null
  >();

  constructor(private eletronicService: EletronicService) {}

  ngOnInit(): void {}
}
