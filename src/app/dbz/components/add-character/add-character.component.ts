import { Component, EventEmitter, Output } from '@angular/core';
import {v4 as uuid} from 'uuid';

import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})

export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  }

  emitCharacter():void{
    console.log(this.character);

    if(this.character.name.length === 0){
      return;
    }
    const newCharacter = {...this.character};

    this.onNewCharacter.emit(newCharacter)

    this.character.name = '';
    this.character.power = 0;
  }
}


