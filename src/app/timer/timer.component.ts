import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <p class="timer">
      Elapsed Time:  <span>{{ elapsedTime }} </span> s
    </p>
  `,
  styleUrls: ['./timer.component.scss']
})

export class TimerComponent implements OnInit {
  
  @Input() elapsedTime: number;
  private gameTick;
  
  ngOnInit(): void {
    this.initTime();
    this.timerTick();
  }
  initTime() {
    clearInterval(this.gameTick);
    this.elapsedTime = 0;
  }
  
  timerTick() {
    this.gameTick = window.setInterval(() => this.elapsedTime++, 1000);
  }
  
}
