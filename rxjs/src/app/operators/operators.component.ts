import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { map, delay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

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
}