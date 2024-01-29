import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  Observable,
  debounceTime,
  elementAt,
  first,
  from,
  last,
  take,
  takeLast,
  takeWhile,
} from "rxjs";

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

  categories = ["Mobile", "Charger", "Headphones", "Mic", "TV"];
  category$: Observable<string> = from(this.categories);

  ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  rank$: Observable<number> = from(this.ranks);

  ngOnInit(): void {
    this.form
      .get("search")
      ?.valueChanges.pipe(takeWhile((value) => this.returnValue(value)))
      //take(4) // It will take 4 charcters
      .pipe(debounceTime(2000))
      .subscribe((data) => {
        console.log(data);
        this.category$
          .pipe(
            //takeLast(2) It will return last 2 values from array
            first() // Its return first value of array
          )
          .subscribe((data1) => {
            //console.log(`TakeLast ${data1}`);
            console.log(`First: ${data1}`);
          });
        this.rank$
          .pipe(
            // last()  Its return last value of array
            elementAt(4)
          )
          .subscribe((data2) => {
            //console.log(`Last: ${data2}`);
            console.log(`Element At: ${data2}`);
          });
      });
  }
  returnValue(value: any): boolean {
    // console.log(value)
    return value.length > 5 ? false : true;
  }
  searchKey() {}
}
