import { Component, OnInit } from "@angular/core";
import { fromEvent, interval, Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-unsubscribe",
  templateUrl: "./unsubscribe.component.html",
  styleUrls: ["./unsubscribe.component.css"],
})
export class UnsubscribeComponent implements OnInit {
  private subscriptionsActive = false;

  private subscriptions: Subscription[] = [];

  private $unsubscribeAll: Subject<any> = new Subject();

  constructor() {}

  ngOnInit() {
    this.checkSubscription();
  }

  checkSubscription() {
    interval(100).subscribe(() => {
      let active = false;
      this.subscriptions.forEach((s) => {
        if (!s.closed) active = true;
      });
      this.subscriptionsActive = active;
    });
  }

  subscribe() {
    const subscription1 = interval(100)
    .pipe(takeUntil(this.$unsubscribeAll))
    .subscribe((i) => {
      console.log(i);
    });
    const subscription2 = fromEvent(
      document,
      "mousemove"
    )
    .pipe(takeUntil(this.$unsubscribeAll))
    .subscribe((e: MouseEvent) => console.log(e));
    this.subscriptions.push(subscription1);
    this.subscriptions.push(subscription2);
  }

  unsubscribe() {
    // this.subscriptions.forEach((s) => s.unsubscribe())
    this.$unsubscribeAll.next();
  }

  ngOnDestroy(): void {
    this.$unsubscribeAll.next();
    console.log('OnDestroy')
  }
}
