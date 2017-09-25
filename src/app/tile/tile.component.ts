import {Component, Input} from '@angular/core';
import {Tile} from './tile';

@Component({
  selector: 'app-tile',
  template: `<div class="square"
                  (click)="onTileClick($event, tile)">
             </div>`,
  styleUrls: ['./tile.component.scss']
})

export class TileComponent {
  
  @Input() tile: Tile;
  
  onTileClick($event, tile: Tile): void {
    $event.target.classList.add('is-clicked');
    
    if (tile.isBomb) {
      $event.target.classList.add('is-bomb');
    } else if (tile.isFlag) {
      $event.target.classList.add('is-flag');
    }
  }
  
}
