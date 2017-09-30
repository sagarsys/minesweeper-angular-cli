import {Injectable} from '@angular/core';

import { Cell } from './cell';

@Injectable()

export class CellService {
  private counter = 0;

  generateCell(): Cell {
    const cell = new Cell();
    cell.id = this.counter;
    cell.isMine = false;
    cell.isFlag = false;
    cell.coordinates = {
      x: 0,
      y: 0
    };
    this.counter++;
    return cell;
  }
  
  makeSpecialCell(type: string, cell: Cell): Cell {
    switch (type) {
      case 'mine':
        cell.isMine = true;
        break;
      case 'flag':
        cell.isFlag = true;
        break;
    }
    return cell;
  }
  
  updateCellCoordinates(cell: Cell, x: number, y: number): void {
    cell.coordinates = { x, y };
  }
  
}
