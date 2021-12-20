import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { BookService } from 'src/app/core/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  index: number | null = null;
  books$: Observable<Book | null> | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.books$ = this.activatedRoute.paramMap.pipe(
      tap((params: ParamMap) => (this.index = +params.get('index')!)),
      switchMap((params: ParamMap) =>
        this.bookService.get(+params.get('index')!)
      )
    );
  }

  remove(): void {
    this.bookService.remove(this.index);
    this.router.navigate(['books']);
  }
}
