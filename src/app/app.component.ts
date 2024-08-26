//import { HeroComponent } from "./heroes/hero/hero.component";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DbzModule } from "./dbz/dbz.module";
import { HeroesModule } from './first/heroes.module';
import { ListComponent } from "./heroes/list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroesModule, DbzModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-bases';

}
