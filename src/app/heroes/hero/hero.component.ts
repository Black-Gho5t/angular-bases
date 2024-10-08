import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string='iroman';
  public age: number=45;

  get capitalizadNmae():string{
    return this.name.toUpperCase();
  }


  public getHeroDescrption():string{
    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name = 'Spiderman'
  }

  changeAge():void{
    this.age = 25
  }


  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
