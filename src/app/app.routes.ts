import { Routes } from "@angular/router";
import { RxjsLeaningComponent } from "./rxjs-leaning/rxjs-leaning.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NextStepsComponent } from "./next-steps/next-steps.component";
import { OfOperatorComponent } from "./of-operator/of-operator.component";
import { FromOperatorComponent } from "./from-operator/from-operator.component";

export const routes: Routes = [
  { path: "rxjs-learning", component: RxjsLeaningComponent },
  { path: "next-step", component: NextStepsComponent },
  { path: "of-operator", component: OfOperatorComponent },
  { path: "from-operator", component: FromOperatorComponent },
  { path: "", redirectTo: "/rxjs-learning", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
