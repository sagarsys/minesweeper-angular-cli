import {Component, Input} from '@angular/core';
import {Tile} from './tile';

@Component({
  selector: 'app-tile',
  template: `<div class="square"
                  (click)="onTileClick($event, tile)">
             </div>`,
})

export class TileComponent {
  
  @Input() tile: Tile;
  
  onTileClick($event, tile: Tile): void {
    console.log($event);
    console.log(tile);
    
    $event.target.classList.add('is-clicked');
    
    if (tile.isBomb) {
      $event.target.classList.add('is-bomb');
    } else if (tile.isFlag) {
      $event.target.classList.add('is-flag');
    }
    
  }
}
