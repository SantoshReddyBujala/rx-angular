import { Routes } from "@angular/router";
import { RxjsLeaningComponent } from "./rxjs-leaning/rxjs-leaning.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FromEventComponent } from "./from-event/from-event.component";
import { OfOperatorComponent } from "./of-operator/of-operator.component";
import { FromOperatorComponent } from "./from-operator/from-operator.component";
import { IntervalOperatorComponent } from "./interval-operator/interval-operator.component";
import { DebounceTimeComponent } from "./debounce-time/debounce-time.component";
import { FilterComponent } from "./filter/filter.component";
import { MathOperatorsComponent } from "./math-operators/math-operators.component";

export const routes: Routes = [
  { path: "rxjs-learning", component: RxjsLeaningComponent },
  { path: "from-event", component: FromEventComponent },
  { path: "of-operator", component: OfOperatorComponent },
  { path: "from-operator", component: FromOperatorComponent },
  { path: "interval-operator", component: IntervalOperatorComponent },
  { path: "debounce-time", component: DebounceTimeComponent },
  { path: "filter", component: FilterComponent },
  { path: "maths-operators", component: MathOperatorsComponent },
  { path: "", redirectTo: "/rxjs-learning", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
