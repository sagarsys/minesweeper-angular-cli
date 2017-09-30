import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TimerComponent } from './timer/timer.component';
import { GameoverComponent } from './gameover/gameover.component';
import { CellService } from './cell/cell.service';
import { GameService} from './game/game.service';
import { TimerService } from './timer/timer.service';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    GameboardComponent,
    StatisticsComponent,
    TimerComponent,
    GameoverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CellService, GameService, TimerService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
