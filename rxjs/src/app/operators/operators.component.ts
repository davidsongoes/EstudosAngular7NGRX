import { Component, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, Observer, Subscription, Subject, timer } from 'rxjs';
import { map, delay, filter, tap, take, first, last, debounceTime, takeWhile, takeUntil } from 'rxjs/operators';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  @ViewChild(MatRipple, { static: true }) ripple: MatRipple;
  private searchInput: string = '';

  constructor() { }

  ngOnInit() {
  }

  public mapClick(): void {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
      .pipe(
        map((i) => i * 2),
        map((i) => i / 2),
        delay(3000)
      )
      .subscribe((v) => console.log(v));

    fromEvent(document, 'click')
      .pipe(
        map((event: MouseEvent) => ({ X: event.screenX, Y: event.screenY }))
      )
      .subscribe((pos) => console.log(pos))
  }

  public filterClick(): void {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
      .pipe(
        filter((i) => i % 2 == 1)
      )
      .subscribe((v) => console.log(v));

    interval(1000)
      .pipe(
        filter((i) => i % 2 == 0),
        map((i) => "Value: " + i),
        delay(1000)
      )
      .subscribe((v) => console.log(v));
  }

  public tapClick(): void {
    interval(1000)
      .pipe(
        tap((i) => console.warn('Before Filter: ', i)),
        filter((i) => i % 2 == 0),
        tap((i) => console.warn('After Filter: ', i)),
        map((i) => "Value: " + i),
        tap((i) => console.warn('After Map: ', i)),
        delay(1000)
      )
      .subscribe((v) => console.log(v));
  }

  public takeClick(): void {
    const observable = new Observable((observer) => {
      let i;
      for (i = 0; i < 20; i++)
        setTimeout(() => observer.next(Math.floor(Math.random() * 100)), i * 100);
      // setTimeout(() => observer.complete(), i*100);
    });
    const s: Subscription = observable
      .pipe(
        tap((i) => console.log(i)),
        // take(10),
        first(),
        // last()
      )
      .subscribe(
        (v) => console.log('Output', v),
        (error) => console.log(error),
        () => console.log('Completed!')
      );

    const interval = setInterval(() => {
      console.log('Checking...');
      if (s.closed) {
        console.warn('Subscription Closed!');
        clearInterval(interval);
      }
    }, 200);
  }

  public debounceTimeClick(): void {
    const debouceSubscription = fromEvent(document, 'click')
      .pipe(
        tap((e) => console.log('Click')),
        debounceTime(1000)
      )
      .subscribe((e: MouseEvent) => {
        console.log('Click with debounceTime: ', e);
        this.launchRiple();
      })
  }

  public launchRiple(): void {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true
    });
    rippleRef.fadeOut();
  }

  public searchEntry$: Subject<string> = new Subject<string>();
  public searchBy_UsingDebounce(event): void {
    this.searchEntry$.next(this.searchInput);
  }

  public debounceTimeSearch(): void {
    fromEvent(document, 'click')
    this.searchEntry$
      .pipe(
        debounceTime(1000)
      )
      .subscribe((s) => console.log(s));
  }

  public takeWhileClick(): void {
    interval(500)
      .pipe(
        takeWhile((value, index) => (value < 5))
      )
      .subscribe(
        (i) => console.log('takeWhile: ', i),
        (error) => console.log(error),
        () => console.log('Completed')
      )
  }

  public takeUntilClick(): void {

    let dueTime$ = timer(5000);

    interval(500)
      .pipe(
        takeUntil(dueTime$)
      )
      .subscribe(
        (i) => console.log('takeWhile: ', i),
        (error) => console.log(error),
        () => console.log('Completed')
      )
  }
}