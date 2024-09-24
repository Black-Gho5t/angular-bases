import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template:`
  <h1>hola counter</h1>


<button (click)="increment(+1)">+1</button>
<button (click)="rest()">rest</button>
<button (click)="desincrement(-1)">-1</button>


  `
})
export class ConuterComponent{
  public couter: number= 10;

  increment( value: number){
    this.couter += 1;
  }

  desincrement(value: number){
    this.couter -= 1;
  }

  rest(){
    this.couter=10;
  }

}
