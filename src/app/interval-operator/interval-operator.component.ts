import { Component, OnInit } from "@angular/core";
import { Observable, from, interval } from "rxjs";

@Component({
  selector: "app-interval-operator",
  standalone: true,
  imports: [],
  templateUrl: "./interval-operator.component.html",
  styleUrl: "./interval-operator.component.scss",
})
export class IntervalOperatorComponent implements OnInit {
  homeArr = ["Home", "Electric", "Internet", "Bill"];
  home$: Observable<string> = from(this.homeArr);
  ngOnInit(): void {
    this.home$.subscribe((data) => {
      const numberSeq$ = interval(1000);
      numberSeq$.subscribe((num) => {
        if (num < 2) console.log(data + num);
      });
    });
  }
}
