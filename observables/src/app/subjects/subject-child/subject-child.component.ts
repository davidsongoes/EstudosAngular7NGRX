import { Component, OnInit, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DataModel } from 'src/app/data.model';

@Component({
  selector: 'app-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.css']
})
export class SubjectChildComponent implements OnInit {

  @Input() subject: Subject<DataModel>;
  @Input() name: string;

  private log: string[] = [];
  private connected: boolean = false;
  private subsctiption: Subscription;

  constructor() { }

  ngOnInit() {
  }

  public logData(data: DataModel): void {
    this.log.push("Timestamp: " + data.timestamp + " Data: " + data.data)
  }

  public connect(): void {
    this.log.push("Connected!");
    this.connected = true;
    this.subsctiption = this.subject.subscribe(
      (data: DataModel) => {
        this.logData(data);},
        (error) => {this.connected = false},
        () => {this,this.connected = false; this.log.push("Finished")}
    );
  }

  public disconnect(): void {

  }

}
