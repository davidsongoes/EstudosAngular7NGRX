import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1.service'
import { Service2 } from 'src/app/service2.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  num: string = ''
  text: string = ''

  constructor(private service1: Service1, private service2: Service2) { }

  ngOnInit() {
    this.num = this.service1.num
    this.text = this.service2.text
  }

}
