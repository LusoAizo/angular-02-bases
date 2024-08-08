import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../heroes/hero/hero.component';
import { ListComponent } from '../heroes/list/list.component';



@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule { }
