import { Component, OnInit } from "@angular/core";
import { Observable, distinct, from, max, min } from "rxjs";

@Component({
  selector: "app-math-operators",
  standalone: true,
  imports: [],
  templateUrl: "./math-operators.component.html",
  styleUrl: "./math-operators.component.scss",
})
export class MathOperatorsComponent implements OnInit {
  ranks: Array<number> = [12, 14, 25, 101, 36, 37, 13, 34, 75, 147, 37, 13, 34, 45];
  ranks$: Observable<number> = from(this.ranks);
  ngOnInit(): void {
    this.ranks$.pipe(max()).pipe(distinct()).subscribe((data) => {
      console.log(`Max Number: ${data}`);
    });

      this.ranks$.pipe(min()).pipe(distinct()).subscribe((data) => {
        console.log(`Min Number: ${data}`);
    });
  }
}
