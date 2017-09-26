import { Component, Input, OnInit } from '@angular/core';

import { Tile } from '../tile/tile';
import { Game } from './game';
import { GameboardService } from './gameboard.service';

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
