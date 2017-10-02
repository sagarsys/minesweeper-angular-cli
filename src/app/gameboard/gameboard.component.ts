import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../game/game';
import { GameService } from '../game/game.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})

export class GameboardComponent {
  
  @Input() game: Game;
  
  constructor(private gameService: GameService) {}
  
  onCellClick(cell) {
    console.log('GB', cell);
    // this.gameService.checkForNearMines(cell);
  
  }
  
}
