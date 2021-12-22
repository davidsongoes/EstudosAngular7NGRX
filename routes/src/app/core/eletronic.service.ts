import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Eletronic } from '../models/eletronic';

@Injectable({
  providedIn: 'root',
})
export class EletronicService {
  private eletronicSubject$: BehaviorSubject<Eletronic[]> = new BehaviorSubject<
    Eletronic[]
  >([]);
  public eletronics$ = this.eletronicSubject$.asObservable();

  constructor() {
    timer(1000).subscribe(() => {
      this.eletronicSubject$.next([
        {
          name: 'Eletronic 1',
          brand: 'Sony',
          price: 10.0,
          description: 'Eletronic 1 - Used',
        },
        {
          name: 'Eletronic 2',
          brand: 'Lenovo',
          price: 20.0,
          description: 'Eletronic 2 - Brand New',
        },
        {
          name: 'Eletronic 3',
          brand: 'Toshiba',
          price: 30.0,
          description: 'Eletronic 3 - Refurbished',
        },
        {
          name: 'Eletronic 4',
          brand: 'LG',
          price: 40.0,
          description: 'Eletronic 4 - Open Box',
        },
        {
          name: 'Eletronic 5',
          brand: 'Samsung',
          price: 50.0,
          description: 'Eletronic 5 - Brand New',
        },
      ]);
    });
  }

  add(data: Eletronic): void {
    this.eletronicSubject$.getValue().push(data);
  }

  get(index: number): Observable<Eletronic | null> {
    return this.eletronics$.pipe(
      map((eletronics) =>
        index >= 0 && index < eletronics.length ? eletronics[index] : null
      ),
      delay(500)
    );
  }

  remove(index: number): void {
    let eletronics = this.eletronicSubject$.getValue();
    if (index >= 0 && index < eletronics.length) {
      eletronics.splice(index, 1);
    }
  }
}
