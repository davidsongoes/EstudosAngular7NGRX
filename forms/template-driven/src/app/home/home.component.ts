import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn()],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
