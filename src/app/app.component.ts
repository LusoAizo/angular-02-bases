import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HeroComponent } from "./heroes/hero/hero.component";
import { ListComponent } from "./heroes/list/list.component";
import { HeroesModule } from './first/heroes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-bases';

}
