import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-of-operator",
  standalone: true,
  imports: [],
  templateUrl: "./of-operator.component.html",
  styleUrl: "./of-operator.component.scss",
})
export class OfOperatorComponent implements OnInit {
  namesArray: string[] = ["Santosh", "Swetha", "Manvith"];
  names: Observable<string[]> = of(this.namesArray);

  name: Observable<string> = of("Santosh Reddy");
  objSub!: any;

  obj = {
    id: 1,
    name: "Santosh",
  };

  dataObj: Observable<any> = of(this.obj);

  ngOnInit(): void {
    this.names.subscribe((data) => {
      console.log(data);
    });
    this.name.subscribe((data) => {
      console.log(data);
    });

    this.dataObj.subscribe((data1) => {
      this.objSub = data1;
    });
  }
}
