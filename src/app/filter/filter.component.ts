import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Observable, debounceTime, distinct, filter, from, skip,count } from "rxjs";

@Component({
  selector: "app-filter",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./filter.component.html",
  styleUrl: "./filter.component.scss",
})
export class FilterComponent implements OnInit {

  homeArr = ["Home", "Electric", "Internet", "Bill", "Home", "Electric", "Internet", "Bill"];

  home$: Observable<string> = from(this.homeArr);
  form = new FormGroup({
    search: new FormControl("Start Search"),
  });

  ngOnInit(): void {
    this.form
      .get("search")
      ?.valueChanges.pipe(filter((v) => this.checkCount(v))).pipe(debounceTime(3000))
      .subscribe((data) => {
        // this.home$.pipe(distinct()).pipe(skip(1)).subscribe(data=>{
        //   console.log(data)
        // })

        this.home$.pipe(distinct()).pipe(count()).subscribe(data=>{
          console.log(data)
        })

      });

     
  }

  searchKey(): void {}

  checkCount(v: any) {
    return v.length < 10 ? true : false;
  }
}
