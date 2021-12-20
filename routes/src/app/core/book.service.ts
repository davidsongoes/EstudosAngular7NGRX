import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(
    []
  );
  public books$ = this.bookSubject$.asObservable();

  constructor() {
    timer(2000).subscribe(() => {
      this.bookSubject$.next([
        { title: 'Book1', pages: 200, authors: ['Davidson', 'Fabiana'] },
        { title: 'Book2', pages: 300, authors: ['Davi', 'Samuel'] },
        { title: 'Book3', pages: 250, authors: ['Arlete', 'Celina'] },
        { title: 'Book4', pages: 150, authors: ['Patricia', 'Iltamar'] },
        { title: 'Book5', pages: 400, authors: ['Davi', 'Windson'] },
      ]);
    });
  }

  add(data: Book): void {
    this.bookSubject$.getValue().push(data);
  }

  get(index: number): Observable<Book | null> {
    return this.books$.pipe(
      map((books) =>
        index >= 0 && index < books.length ? books[index] : null
      ),
      delay(500)
    );
  }

  remove(index: number | null): void {
    let books = this.bookSubject$.getValue();
    if (index! >= 0 && index! < books.length) {
      books.splice(index!, 1);
    }
  }
}
