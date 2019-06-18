import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject, ConnectableObservable } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.css']
})
export class HotObservablesComponent implements OnInit {

  n: number = 0;

  n1: number = 0;
  n2: number = 0;

  s1: string = '';
  s2: string = '';

  myObservable: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.myObservable = new Observable(
      (observer: Observer<number>) => {
        let i: number = 0;
        console.log('%c Observable Created!', 'background: #cccccc; color: #ff0000');
        setInterval(() => {
          i++;
          console.log(`%c${i}`, 'background: #cccccc; color: #427af4');
          (i == 100) ? observer.complete() : observer.next(i);
        }, 1000);
      }
    );
    // this.usingSubjects();
    this.usingPublish();
  }

  public usingPublish(): void {
    // const multcasted = this.myObservable.pipe(publish(), refCount());
    const multcasted: ConnectableObservable<number> = this.myObservable
    .pipe(publish()) as ConnectableObservable<number>;

    multcasted.connect();
      // Subscribe 1
      this.s1 = 'Waiting for interval...';
      setTimeout(() => {
        multcasted.subscribe((_n) => {
          this.n1 = _n;
          this.s1 = 'OK';
        });
      }, 2000);
  
      // Subscribe 2
      this.s2 = 'Waiting for interval...';
      setTimeout(() => {
        multcasted.subscribe((_n) => {
          this.n2 = _n;
          this.s2 = 'OK';
        });
      }, 4000);
  }

  public usingSubjects(): void {
    const subject = new Subject<number>();
    this.myObservable.subscribe(subject);


    // Subscribe 1
    this.s1 = 'Waiting for interval...';
    setTimeout(() => {
      subject.subscribe((_n) => {
        this.n1 = _n;
        this.s1 = 'OK';
      });
    }, 2000);

    // Subscribe 2
    this.s2 = 'Waiting for interval...';
    setTimeout(() => {
      subject.subscribe((_n) => {
        this.n2 = _n;
        this.s2 = 'OK';
      });
    }, 4000);

  }
}