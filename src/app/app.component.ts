import { Component, OnInit } from '@angular/core';

import { GameboardComponent } from './gameboard/gameboard.component';
import {TileComponent} from './tile/tile.component';
import {TileService} from './tile/tile.service';
import {GameboardService} from './gameboard/gameboard.service';
import { Game } from './gameboard/game';
import { Gameboard } from './gameboard/gameboard';


@Component({
  selector: 'app-root',
  template: `
    <app-gameboard [game]="this.game"></app-gameboard>
    <app-statistics
        [maxBombs]="this.gameboard.maxBombs"
        [maxFlags]="this.gameboard.maxFlags"
        [numFlags]="this.gameboard.flagsFound">
    </app-statistics>
    <app-timer></app-timer>
    <app-gameover
        [maxFlags]="this.gameboard.maxFlags"
        [flagsFound]="this.gameboard.flagsFound"
        [isGameOver]="this.gameboard.isGameOver"
        [playTime]="0">
    </app-gameover>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  game: Game;
  gameboard: Gameboard;
  
  constructor(private gameboardService: GameboardService) {}
  
  ngOnInit(): void {
    this.game = this.gameboardService.init();
    this.gameboard = this.gameboardService.getGameboard();
  }
  
}
