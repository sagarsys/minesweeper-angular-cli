import { Component, Input, OnInit } from '@angular/core';

import { Game } from '../game/game';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})

export class GameboardComponent {
  
  @Input() game: Game;
  
  onTileClick($event) {
    console.log('GB', $event);
  }
  
}
