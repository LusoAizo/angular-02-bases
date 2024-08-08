import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  //imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number = 45;

  getDescription():string {
    return `${this.name} - ${this.age}`;
  }
  setToUpper():string {
    return this.name.toUpperCase();
  }
  changeName():void {
    this.name = "spiderman";
  }
  changeAge():void {
    this.age = 18;
  }
  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
