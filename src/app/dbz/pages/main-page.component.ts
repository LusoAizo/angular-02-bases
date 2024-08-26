import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class MainPageComponent {

 constructor( private dbzService: DbzService){};

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }
  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter(character: Character){
    this.dbzService.addCharacter( character );
  }
}
