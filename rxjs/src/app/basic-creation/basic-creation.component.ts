import { Component, OnInit } from '@angular/core';
import { Observable, Observer, from, of, interval } from 'rxjs';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public observableCreate(): void {
    const hello = Observable.create((observer: Observer<string>) => {
      observer.next("Hello");
      observer.next("from");
      observer.next("Observable");
      observer.complete();
    });
    hello.subscribe((val) => console.log(val));
  }

  public fromClick(): void{
    from([1,2,3,4,5,{x:10, y: 20}]).subscribe((v) => console.log(v));
    const source = from([1,2,3,4,5,{x:10, y: 20}]);
    source.subscribe((v) => console.error(v));
    source.subscribe((v) => console.warn(v));
  }

  public ofClick(): void {
    of([1,2,3,4,5,{x:10, y: 20}]).subscribe((v) => console.log(v));
  }

  public intervalClick(): void {
    const source = interval(1000);
    source.subscribe((v) => console.log(v));
  }

}
