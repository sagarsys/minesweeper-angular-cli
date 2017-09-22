import {Component, OnInit} from '@angular/core';

import { Tile } from '../tile/tile';
import { Gameboard } from './gameboard';
// import { Game } from './game';
import { TileService } from '../tile/tile.service';
import { GameboardService } from './gameboard.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
})

export class GameboardComponent implements OnInit {
  
  game: Array<Tile[]>;
  gameboard: Gameboard;
  
  constructor(private tileService: TileService, private gameboardService: GameboardService) {}
  
  ngOnInit(): void {
    this.gameboard = this.gameboardService.generateGameboard('easy');
    this.game = this.getGameboard();
    
    console.log(this.game);
  }
  
  getRow(): Array<Tile> {
    const tilesRow: Array<Tile> = [],
      numOfCols = this.gameboard.tilesX;
    let numBombs = 0,
      numFlags = 0;
    
    for (let i = 0; i < numOfCols; i++) {
      if (numBombs < this.gameboard.maxBombs && numFlags < this.gameboard.maxFlags) {
        tilesRow.push(this.tileService.generateRandomTile());
      } else if (numBombs < this.gameboard.maxBombs && numFlags >= this.gameboard.maxFlags) {
        tilesRow.push(this.tileService.generateBombTile());
      } else if (numBombs >= this.gameboard.maxBombs && numFlags < this.gameboard.maxFlags) {
        tilesRow.push(this.tileService.generateFlagTile());
      } else if (numBombs >= this.gameboard.maxBombs && numFlags >= this.gameboard.maxFlags) {
        tilesRow.push(this.tileService.generateTile());
      }
      tilesRow.map((tile) => {
        if (tile.isBomb) {
          numBombs++;
        } else if (tile.isFlag) {
          numFlags++;
        }
      });
    }
    return tilesRow;
  }
  
  getGameboard(): Array<Array<Tile>> {
    const numOfRows = this.gameboard.tilesY,
      game:  Array<Array<Tile>> = [];
    
    for (let i = 0; i < numOfRows; i++) {
      game.push(this.getRow());
    }
    return game;
  }
  
}
