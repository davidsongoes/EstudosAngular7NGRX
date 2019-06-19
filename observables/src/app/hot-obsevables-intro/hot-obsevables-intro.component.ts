import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-hot-obsevables-intro',
  templateUrl: './hot-obsevables-intro.component.html',
  styleUrls: ['./hot-obsevables-intro.component.css']
})
export class HotObsevablesIntroComponent implements OnInit {

  @ViewChild('myButton', { static: true }) button: ElementRef

  n1: number = 0;
  n2: number = 0;

  s1: string = '';
  s2: string = '';

  constructor() { }

  ngOnInit() {
    let myBtnClickObservable: Observable<any> = fromEvent(this.button.nativeElement, 'click'
    );
    myBtnClickObservable.subscribe((event) => console.log('Click Button 1'));
    myBtnClickObservable.subscribe((event) => console.log('Click Button 2'));
  }

}
