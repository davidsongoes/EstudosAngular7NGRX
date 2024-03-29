import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../core/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  books$: Observable<Book[]> | undefined;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bookService.books$;
  }
}
