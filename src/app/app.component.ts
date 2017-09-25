import { Component } from '@angular/core';

import { GameboardComponent } from './gameboard/gameboard.component';
import {TileComponent} from './tile/tile.component';
import {TileService} from './tile/tile.service';
import {GameboardService} from './gameboard/gameboard.service';


@Component({
  selector: 'app-root',
  template: `
    <app-gameboard></app-gameboard>
    <app-statistics></app-statistics>
    <app-timer></app-timer>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

}
