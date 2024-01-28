import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, take, takeWhile } from "rxjs";

@Component({
  selector: "app-debounce-time",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./debounce-time.component.html",
  styleUrl: "./debounce-time.component.scss",
})
export class DebounceTimeComponent implements OnInit {
  form = new FormGroup({
    search: new FormControl("Start Search"),
  });

  ngOnInit(): void {
    this.form
      .get("search")
      ?.valueChanges.pipe(takeWhile((value) => this.returnValue(value)))
      //take(4)
      .pipe(debounceTime(2000))
      .subscribe((data) => {
        console.log(data);
      });
  }
  returnValue(value: any): boolean {
    // console.log(value)
    return value.length > 5 ? false : true;
  }
  searchKey() {}
}
