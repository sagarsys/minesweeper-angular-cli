import { Component, OnInit } from '@angular/core';

import { Game } from './game/game';
import { Gameboard } from './gameboard/gameboard';
import {GameService} from './game/game.service';
import { TimerService } from './timer/timer.service';


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
  
  constructor(private gameService: GameService, private timerService: TimerService) {}
  
  ngOnInit(): void {
    this.game = this.gameService.init();
    this.gameboard = this.gameService.getGameboard();
  }
  
}
