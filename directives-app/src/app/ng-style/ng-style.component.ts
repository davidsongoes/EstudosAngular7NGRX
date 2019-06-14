import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-style",
  templateUrl: "./ng-style.component.html",
  styleUrls: ["./ng-style.component.css"]
})
export class NgStyleComponent implements OnInit {

  colorRadioButton: string = "primary";
  myFontSize: string = "10px"
  myColor: string = "green"
  
  constructor() {}

  ngOnInit() {}
}
