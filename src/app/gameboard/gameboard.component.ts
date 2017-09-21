import {Component, OnInit} from '@angular/core';

import { Tile } from '../tile/tile';
import { TileService } from '../tile/tile.service';

@Component({
  selector: 'app-gameboard',
  template: `<div class="gameboard"></div>`,
  providers: [TileService]
})

export class GameboardComponent implements OnInit {
  tiles: Array<Array<Tile>>;
  tilesRow: Array<Tile>;
  constructor(private tileService: TileService) {}
  ngOnInit(): void {
    this.getTiles();
  }
  getTiles(): Array<Array<Tile>> {
    this.tilesRow.push(this.tileService.generateTile());
    this.tiles.push(this.tilesRow);
    return this.tiles;
  }
}
