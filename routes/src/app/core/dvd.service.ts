import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Dvd } from '../models/dvd';

@Injectable({
  providedIn: 'root',
})
export class DvdService {
  private dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  private dvd$ = this.dvdSubject$.asObservable();

  constructor() {
    timer(2000).subscribe(() => {
      this.dvdSubject$.next([
        { title: 'Dvd1', year: '2015', genre: 'Funny' },
        { title: 'Dvd2', year: '2011', genre: 'Horror' },
        { title: 'Dvd3', year: '2002', genre: 'Drama' },
        { title: 'Dvd4', year: '2010', genre: 'Nature' },
        { title: 'Dvd5', year: '2018', genre: 'Engineering' },
      ]);
    });
  }

  add(data: Dvd): void {
    this.dvdSubject$.getValue().push(data);
  }

  get(index: number): Observable<Dvd | null> {
    return this.dvd$.pipe(
      map((books) =>
        index >= 0 && index < books.length ? books[index] : null
      ),
      delay(1000)
    );
  }

  remove(index: number): void {
    let books = this.dvdSubject$.getValue();
    if (index >= 0 && index < books.length) {
      books.splice(index, 1);
    }
  }
}
