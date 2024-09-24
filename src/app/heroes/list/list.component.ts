import { Component } from '@angular/core';

@Component({
  selector: 'app-horoes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['spiderman','ironman','hulk','thor','she hulk'];
  public deletedHero?: string;


  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
    //console.log({deletedHero})
  }

}
