import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tile} from './tile';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-tile',
  template: `<div class="square"
                  (click)="onTileClick($event, tile)">
             </div>`,
  styleUrls: ['./tile.component.scss']
})

export class TileComponent {
  
  @Input() tile: Tile;
  @Output() tileClick = new EventEmitter();
  
  onTileClick($event, tile: Tile): void {
    $event.target.classList.add('is-clicked');
    
    if (tile.isBomb) {
      $event.target.classList.add('is-bomb');
    } else if (tile.isFlag) {
      $event.target.classList.add('is-flag');
    }
    
    this.tileClick.emit(tile);
  }
  
}
