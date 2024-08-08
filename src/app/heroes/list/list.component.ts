import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: false,
  //imports: [], esta linea solo esta en los standalone components no la elimino para saber eso
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroeNames:string[] = ['Spiderman', 'Thor', 'superman', 'Batman', 'Wolverine'];
  public deletedHero?:string;

  deleteHero():void {
    this.deletedHero = this.heroeNames.pop();
  }
}
