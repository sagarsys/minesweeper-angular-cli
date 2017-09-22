import { Injectable } from '@angular/core';

import { Gameboard } from './gameboard';

@Injectable()

export class GameboardService {
  generateGameboard(difficulty): Gameboard {
    switch (difficulty) {
      case 'easy':
        return {
          tilesX: 10,
          tilesY: 10,
          isGameOver: false,
          maxBombs: 5,
          maxFlags: 15
        };
      case 'hard':
        return {
          tilesX: 10,
          tilesY: 10,
          isGameOver: false,
          maxBombs: 15,
          maxFlags: 10
        };
    }
  }
}
