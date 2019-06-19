import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.css']
})
export class ColdObservablesComponent implements OnInit {

  mySubscription1: Subscription;
  mySubscription2: Subscription;

  n1: number = 0;
  n2: number = 0;

  s1: string = '';
  s2: string = '';

  constructor() { }

  ngOnInit() {
    const myConstObservable = new Observable((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
      observer.complete();
      observer.error('Error');
    });

    myConstObservable.subscribe(
      (n: number) => console.log(n),
      (error) => console.log(error),
      () => console.log('Completed')
    );

    /** const timerCount = interval(500);
    timerCount.subscribe((n: number) => {
      console.log(n)
    });

    console.log("After Interval");
    */

    const myIntervalObservable = new Observable(
      (observer: Observer<any>) => {
        this.s1 = 'Initializing...'
        this.s2 = 'Initializing...'
        let i: number = 0;
        let id = setInterval(() => {
          i++;
          console.log("From Observable: ", i);
          if (i >= 10) {
            observer.complete();
          } else if (i % 2 == 0) {
            observer.next(i);
          }
        }, 1000);
        return () => clearInterval(id);
      }
    );
    
    this.mySubscription1 = myIntervalObservable.subscribe(
      (n) => this.n1 = n,
      (error) => this.s1 = "Error: " + error,
      () => this.s1 = "Completed"
    );

    this.mySubscription2 = myIntervalObservable.subscribe(
      (n) => this.n2 = n,
      (error) => this.s2 = "Error: " + error,
      () => this.s2 = "Completed"
    );

    setTimeout(() => {
      this.mySubscription1.unsubscribe();
      console.log('Unsubscrive in Subscription1')
    }, 4000);

    setTimeout(() => {
      this.mySubscription2.unsubscribe();
      console.log('Unsubscrive in Subscription2')
    }, 8000);
  }
}