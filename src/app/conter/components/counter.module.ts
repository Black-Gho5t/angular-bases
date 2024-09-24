import { NgModule } from "@angular/core";
import { ConuterComponent } from "./counter/counter.component";

@NgModule({
  declarations: [
    ConuterComponent
  ],
  exports: [
    ConuterComponent
  ]
})
export class CounterModule{}
