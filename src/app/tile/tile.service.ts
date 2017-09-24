import {Injectable} from '@angular/core';

import { Tile } from './tile';

@Injectable()

export class TileService {
  private counter = 0;

  generateTile(): Tile {
    const tile = new Tile();
    tile.id = this.counter;
    tile.isBomb = false;
    tile.isFlag = false;
    this.counter++;
    return tile;
  }
  
  makeSpecialTile(type: string, tile: Tile): Tile {
    switch (type) {
      case 'bomb':
        tile.isBomb = true;
        break;
      case 'flag':
        tile.isFlag = true;
        break;
    }
    return tile;
  }
  
}
