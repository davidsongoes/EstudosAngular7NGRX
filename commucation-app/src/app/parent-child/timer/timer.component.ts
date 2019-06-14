import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  private miliseconds: number = 0
  private interval: any
  private running: boolean = false

  constructor() { }

  ngOnInit() {
  }

  public start(): void {
    if (!this.running) {
      this.interval = setInterval(() => {
        this.miliseconds += 10
      }, 10)
      this.running = true
    }
  }

  public stop(): void {
    if (this.running) {
      clearInterval(this.interval)
      this.running = false
    }
  }

  public clear(): void {
    this.miliseconds = 0
  }

  public round(n: number): number {
    return Math.round(n)
  }

}
