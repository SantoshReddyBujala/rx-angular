import { Component, OnInit } from "@angular/core";
import { Observable, from } from "rxjs";
import { setInterval } from "timers";

@Component({
  selector: "app-from-operator",
  standalone: true,
  imports: [],
  templateUrl: "./from-operator.component.html",
  styleUrl: "./from-operator.component.scss",
})
export class FromOperatorComponent implements OnInit {
  homeArr = ["Home", "Electric", "Internet", "Bill"];
  homeData!: any;

  home$: Observable<string> = from(this.homeArr);

  ngOnInit(): void {
   this.anotherMethod();
  }

  anotherMethod(): void{
    this.home$.subscribe((data) => {
      this.homeData = data;
    console.log(data);
  });
  }
}
