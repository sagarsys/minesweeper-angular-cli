import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import {TileComponent} from './tile/tile.component';
import {TileService} from './tile/tile.service';
import {GameboardService} from './gameboard/gameboard.service';
import {StatisticsComponent} from './statistics/statistics.component';
import {TimerComponent} from './timer/timer.component';
import { GameoverComponent } from './gameover/gameover.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    GameboardComponent,
    StatisticsComponent,
    TimerComponent,
    GameoverComponent
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
