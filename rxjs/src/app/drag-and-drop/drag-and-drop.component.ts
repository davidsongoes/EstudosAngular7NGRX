import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  @ViewChild('myRect', {static: true}) myRect: ElementRef

  top: number = 40;
  left: number = 40;

  constructor() { }

  ngOnInit() {
    let mouseDown = fromEvent(this.myRect.nativeElement , 'mousedown');
    let mouseMove = fromEvent(document, 'mousemove');
    let mouseUp = fromEvent(document, 'mouseup');

    mouseDown.subscribe((eD: MouseEvent) => {
      // console.log('Mouse Down: ',eD);
      let x = eD.screenX;
      let y = eD.screenY;

      mouseMove
      .pipe(
        takeUntil(mouseUp)
      )
      .subscribe((eM: MouseEvent) => {
        // console.log('Mouse Move: ',eM);
        let offSetX = x - eM.screenX;
        let offSetY = y - eM.screenY;
        this.top -= offSetY;
        this.left -= offSetX;
        x = eM.screenX;
        y = eM.screenY;
      })
    });

  }

}
