import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable, interval } from "rxjs";

@Component({
  selector: "app-rxjs-leaning",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./rxjs-leaning.component.html",
  styleUrl: "./rxjs-leaning.component.scss",
})
export class RxjsLeaningComponent implements OnInit {
  agents!: Observable<string>;
  name!: string;
  constructor() {}
  ngOnInit(): void {
    this.agents = new Observable(function (observer) {
      try {
        observer.next("Satnosh");
        observer.next("Swetha");
      } catch (e) {
        observer.error(e);
      }
    });
    this.agents.subscribe((data) => {
      this.name = data;
    });
  }
}
