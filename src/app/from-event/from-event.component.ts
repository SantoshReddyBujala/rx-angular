import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-from-event",
  standalone: true,
  imports: [],
  templateUrl: "./from-event.component.html",
  styleUrl: "./from-event.component.scss",
})
export class FromEventComponent {
  @ViewChild("validate")
  validate!: ElementRef;

  fromEventObservable(): void {
    const buttonObservable$ = fromEvent(this.validate.nativeElement, "click");
    buttonObservable$.subscribe((data) => {
      console.log(data);
    });
  }
}
