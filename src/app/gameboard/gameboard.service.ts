import { Injectable } from '@angular/core';

import {Tile} from '../tile/tile';
import {TileService} from '../tile/tile.service';
import { Gameboard } from './gameboard';
import {Game} from './game';

@Injectable()

export class GameboardService {
  
  public game: Game;
  private gameboard: Gameboard;
  private gameArrLength: number;
  private bombArray: number[];
  private flagArray: number[];
  
  constructor(private tileService: TileService) {}
  
  init(difficulty = 'easy'): Game {
    this.gameboard = this.generateGameboard(difficulty);
    this.game = this.generateGame(this.gameboard);
    this.gameArrLength = (this.gameboard.tilesX * this.gameboard.tilesY);
    
    this.bombArray = this.generateSpecialArray(this.gameboard.maxBombs, 0, this.gameArrLength);
    this.flagArray = this.generateSpecialArray(this.gameboard.maxFlags, 0, this.gameArrLength, this.bombArray);
    
    this.generateSpecialTiles(this.game, this.bombArray, 'bomb');
    this.generateSpecialTiles(this.game, this.flagArray, 'flag');
    
    return this.game;
  }
  
  private generateGameboard(difficulty): Gameboard {
    const gameboard = new Gameboard();
    switch (difficulty) {
      case 'easy':
        gameboard.tilesX = 10;
        gameboard.tilesY = 10;
        gameboard.isGameOver = false;
        gameboard.maxBombs = 5;
        gameboard.maxFlags = 10;
        break;
      case 'hard':
        gameboard.tilesX = 10;
        gameboard.tilesY = 10;
        gameboard.isGameOver = false;
        gameboard.maxBombs = 15;
        gameboard.maxFlags = 1;
        break;
    }
    return gameboard;
  }
  
  private generateGame(gameboard: Gameboard): Game {
    const game = new Game(),
      arrLength = (gameboard.tilesX * gameboard.tilesY);
    
    for (let i = 0; i < arrLength; i++) {
      const tile = this.tileService.generateTile();
      game.push(tile);
    }
    
    return game;
  }
  
  private generateSpecialTiles(game: Game, specialArr: number[], type: string): void {
    for (let i = 0; i < specialArr.length; i++) {
      const tile = game[specialArr[i]];
      this.tileService.makeSpecialTile(type, tile);
    }
  }
  /**
   * Returns a random array of integers of a given length between a start (inclusive) and an end (inclusive)
   */
  private generateSpecialArray(length: number, start: number = 0, end: number, controlArray: number[] = []): number[] {
    const specialArray = [];
    while (length > 0) {
      const randomNum = this.getRandomInt(start, end);
      if (controlArray.length === 0 || controlArray.indexOf(randomNum) < 0) {
        if (specialArray.indexOf(randomNum) < 0) {
          specialArray.push(randomNum);
          length--;
        }
      }
    }
    return specialArray;
  }
  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   */
  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
}
