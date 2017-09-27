import { Injectable } from '@angular/core';

import { TileService } from '../tile/tile.service';
import { Gameboard } from '../gameboard/gameboard';
import { Game } from './game';
import { GameArray } from './gameArray';

@Injectable()
export class GameService {
  
  public game: Game;
  private gameArray: GameArray;
  private gameboard: Gameboard;
  private gameArrLength: number;
  private bombArray: number[];
  private flagArray: number[];
  
  constructor(private tileService: TileService) {}
  
  init(difficulty = 'easy'): Game {
    this.gameboard = this.generateGameboard(difficulty);
    this.gameArray = this.generateGameArray(this.gameboard);
    this.gameArrLength = (this.gameboard.tilesX * this.gameboard.tilesY);
    
    this.bombArray = this.generateSpecialArray(this.gameboard.maxBombs, 0, this.gameArrLength);
    this.flagArray = this.generateSpecialArray(this.gameboard.maxFlags, 0, this.gameArrLength, this.bombArray);
    this.generateSpecialTiles(this.gameArray, this.bombArray, 'bomb');
    this.generateSpecialTiles(this.gameArray, this.flagArray, 'flag');
    
    this.game = this.generateGame(this.gameArray);
    
    return this.game;
  }
  
  public getGameboard(): Gameboard {
    return this.gameboard;
  }
  
  private generateGameboard(difficulty): Gameboard {
    const gameboard = new Gameboard();
    switch (difficulty) {
      case 'easy':
        gameboard.tilesX = 10;
        gameboard.tilesY = 10;
        gameboard.maxBombs = 5;
        gameboard.maxFlags = 10;
        gameboard.flagsFound = 0;
        gameboard.isGameOver = false;
        break;
      case 'hard':
        gameboard.tilesX = 10;
        gameboard.tilesY = 10;
        gameboard.maxBombs = 15;
        gameboard.maxFlags = 1;
        gameboard.flagsFound = 0;
        gameboard.isGameOver = false;
        break;
    }
    return gameboard;
  }
  
  private generateGameArray(gameboard: Gameboard): GameArray {
    const gameArr = new GameArray(),
      arrLength = (gameboard.tilesX * gameboard.tilesY);
    
    for (let i = 0; i < arrLength; i++) {
      const tile = this.tileService.generateTile();
      gameArr.push(tile);
    }
    
    return gameArr;
  }
  
  private generateSpecialTiles(gameArr: GameArray, specialArr: number[], type: string): void {
    for (let i = 0; i < specialArr.length; i++) {
      const tile = gameArr[specialArr[i]];
      this.tileService.makeSpecialTile(type, tile);
    }
  }
  
  private generateGame(gameArr: GameArray): Game {
    const game = new Game();
    for (const i = 0; i < gameArr.length; i + this.gameboard.tilesY) {
      const splitArr = gameArr.splice(i, i + this.gameboard.tilesY);
      game.push(splitArr);
    }
    return game;
    
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
