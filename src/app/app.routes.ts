import { Routes } from "@angular/router";
import { RxjsLeaningComponent } from "./rxjs-leaning/rxjs-leaning.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NextStepsComponent } from "./next-steps/next-steps.component";

export const routes: Routes = [
  { path: "rxjs-learning", component: RxjsLeaningComponent },
  { path: "next-step", component: NextStepsComponent },
  { path: "", redirectTo: "/rxjs-learning", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
