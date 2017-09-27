import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TimerComponent } from './timer/timer.component';
import { GameoverComponent } from './gameover/gameover.component';
import { TileService } from './tile/tile.service';
import { GameService} from './game/game.service';
import { TimerService } from './timer/timer.service';

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
  providers: [TileService, GameService, TimerService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
