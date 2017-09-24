import {Component, OnInit} from '@angular/core';

import { Tile } from '../tile/tile';
import { Game } from './game';
import { GameboardService } from './gameboard.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
})

export class GameboardComponent implements OnInit {
  
  game: Game;
  constructor(private gameboardService: GameboardService) {}
  
  ngOnInit(): void {
    this.game = this.gameboardService.init();
    console.log(this.game);
  }
  
}
