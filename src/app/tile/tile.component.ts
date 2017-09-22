import {Component, Input} from '@angular/core';
import {Tile} from './tile';

@Component({
  selector: 'app-tile',
  template: `<div class="square"
                  (click)="onTileClick($event, tile)"
                  [ngClass]="{'is-bomb' : tile.isBomb, 'is-flag':tile.isFlag}">
             </div>`,
})

export class TileComponent {
  
  @Input() tile: Tile;
  
  onTileClick($event, tile: Tile): void {
    console.log($event);
    console.log(tile);
  }
}
