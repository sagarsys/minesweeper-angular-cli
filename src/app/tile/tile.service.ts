import {Injectable} from '@angular/core';

import { Tile } from './tile';

@Injectable()

export class TileService {
  private counter = 0;
  generateRandomTile(): Tile {
    const tile = new Tile();
    tile.id = this.counter;
    tile.isBomb = (Math.floor(Math.random() * (1 + 1)) === 1);
    tile.isFlag = !tile.isBomb || (Math.floor(Math.random() * (1 + 1)) === 0);
    this.counter++;
    return tile;
  }
  generateTile(): Tile {
    const tile = new Tile();
    tile.id = this.counter;
    tile.isBomb = false;
    tile.isFlag = false;
    this.counter++;
    return tile;
  }
  generateBombTile(): Tile {
    const tile = new Tile();
    tile.id = this.counter;
    tile.isBomb = true;
    tile.isFlag = !tile.isBomb || (Math.floor(Math.random() * (1 + 1)) === 0);
    return tile;
  }
  generateFlagTile(): Tile {
    const tile = new Tile();
    tile.id = this.counter;
    tile.isFlag = true;
    tile.isBomb = !tile.isFlag || (Math.floor(Math.random() * (1 + 1)) === 1);
    return tile;
  }
}
