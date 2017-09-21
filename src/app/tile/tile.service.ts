import {Injectable} from '@angular/core';

import { Tile } from './tile';

@Injectable()

export class TileService {
  private counter = 0;
  public generateTile(): Tile {
    const id = this.counter;
    const isBomb = (Math.floor(Math.random() * (1 + 1)) === 1);
    const isFlag = (Math.floor(Math.random() * (1 + 1)) === 0);
    this.counter++;
    return { id, isBomb, isFlag };
  }
}
