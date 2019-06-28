import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, toArray, delay } from 'rxjs/operators';

interface User {
  login: string;
  name: string;
}

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  options$: Observable<string[]>;

  logins$: Observable<User>;

  constructor() { }

  ngOnInit() {
    this.options$ = Observable.create(
      (observer) => {
        for (let i = 0; i < 10; i++) {
          observer.next(`This is my ${i}th option`);
        }
        observer.complete();
      }
    )
      .pipe(
        map(s => s + '!'),
        toArray(),
        delay(1000)
      );

    // this.options$.subscribe(s => console.log(s));

    this.logins$ = new Observable<User>((observer) => {
      let names = ['Mr. Davidson', 'Mr. Raphael', 'Mr. Davi', 'Mr. Mister'];
      let logins = ['davidson', 'raphael', 'davi', 'mister'];
      let i = 0;
      console.log('Here in logins$');
      setInterval(() => {
        if (i == 4)
          observer.complete();
        else
          observer.next({login: logins[i], name: names[i]});
          i++;
      }, 3000);
    });
    this.logins$.subscribe(
      (s) => console.log(s),
      (error) => console.log(error),
      () => console.log("Completed!")
      
      );
  }
}