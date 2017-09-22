import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import {TileComponent} from './tile/tile.component';
import {TileService} from './tile/tile.service';
import {GameboardService} from './gameboard/gameboard.service';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    TileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TileService, GameboardService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
