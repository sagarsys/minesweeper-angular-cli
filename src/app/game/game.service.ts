import { Injectable } from '@angular/core';

import { Cell } from '../cell/cell';
import { CellService } from '../cell/cell.service';
import { Gameboard } from '../gameboard/gameboard';
import { Game } from './game';
import { GameArray } from './gameArray';

@Injectable()
export class GameService {
  
  public game: Game;
  private gameArray: GameArray;
  private gameboard: Gameboard;
  private gameArrLength: number;
  private mineArray: number[];
  private flagArray: number[];
  
  constructor(private cellService: CellService) {}
  
  init(difficulty = 'easy'): Game {
    this.gameboard = this.generateGameboard(difficulty);
    this.gameArray = this.generateGameArray(this.gameboard);
    this.gameArrLength = (this.gameboard.numOfCols * this.gameboard.numOfRows);
    
    this.mineArray = this.generateSpecialArray(this.gameboard.maxMines, 0, this.gameArrLength);
    this.flagArray = this.generateSpecialArray(this.gameboard.maxFlags, 0, this.gameArrLength, this.mineArray);
    this.generateSpecialCells(this.gameArray, this.mineArray, 'mine');
    this.generateSpecialCells(this.gameArray, this.flagArray, 'flag');
    
    this.game = this.generateGame(this.gameArray);
    
    return this.game;
  }
  
  public getGameboard(): Gameboard {
    return this.gameboard;
  }
  
  public checkForNearMines(game: Game, gameboard: Gameboard, cell: Cell): number {
    const nearMines: Cell[] = [],
      x = cell.coordinates.x,
      y = cell.coordinates.y,
      xNearArr = [ x - 1, x, x + 1 ],
      yNearArr = [ y - 1, y, y + 1 ];
    
    for (let i = 0; i < xNearArr.length; i++) {
      for (let j = 0; j < yNearArr.length; j++) {
        const currentCell = game[i][j];
        if (currentCell.isMine && currentCell !== cell) {
          nearMines.push(currentCell);
        }
      }
    }
    return nearMines.length;
  }
  
  private generateGameboard(difficulty): Gameboard {
    const gameboard = new Gameboard();
    switch (difficulty) {
      case 'easy':
        gameboard.numOfCols = 10;
        gameboard.numOfRows = 10;
        gameboard.maxMines = 5;
        gameboard.maxFlags = 10;
        gameboard.flagsFound = 0;
        gameboard.isGameOver = false;
        break;
      case 'hard':
        gameboard.numOfCols = 10;
        gameboard.numOfRows = 10;
        gameboard.maxMines = 15;
        gameboard.maxFlags = 1;
        gameboard.flagsFound = 0;
        gameboard.isGameOver = false;
        break;
    }
    return gameboard;
  }
  
  private generateGameArray(gameboard: Gameboard): GameArray {
    const gameArr = new GameArray(),
      arrLength = (gameboard.numOfCols * gameboard.numOfRows);
    
    for (let i = 0; i < arrLength; i++) {
      const cell = this.cellService.generateCell();
      
      gameArr.push(cell);
    }
    
    return gameArr;
  }
  
  private generateSpecialCells(gameArr: GameArray, specialArr: number[], type: string): void {
    for (let i = 0; i < specialArr.length; i++) {
      const cell = gameArr[specialArr[i]];
      this.cellService.makeSpecialCell(type, cell);
    }
  }
  
  private generateGame(gameArr: GameArray): Game {
    const game = new Game();
    let y = 0;
    for (const i = 0; i < gameArr.length; i + this.gameboard.numOfRows) {
      const splitArr = gameArr.splice(i, i + this.gameboard.numOfRows);
      splitArr.map((cell, x) => this.cellService.updateCellCoordinates(cell, x, y));
      game.push(splitArr);
      y++;
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
