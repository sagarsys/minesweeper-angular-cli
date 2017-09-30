import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameover',
  template: `<div class="gameover" ([ngClass])="{ 'visible': isGameOver }">
                <h2>GAME OVER!</h2>
                <p>{{ this.getGameOverMessage() }}</p>
                <p>Your play time was {{ this.playTime }} seconds.</p>
             </div>`
})

export class GameoverComponent implements OnInit {
  
  @Input() isGameOver: boolean;
  @Input() flagsFound: number;
  @Input() maxFlags: number;
  @Input() playTime: number;
  
  ngOnInit(): void {
    this.isGameOver = false;
  }
  
  triggerGameOver() {
    if (!this.isGameOver) {
      this.isGameOver = !this.isGameOver;
      this.getGameOverMessage();
    }
  }
  
  getGameOverMessage(): string {
    let message: string;
    if (this.flagsFound === this.maxFlags) {
      message = `You win! You found all ${this.maxFlags} flags without hitting a mine!`;
    } else {
      message = `You lose! You found ${this.flagsFound} out of ${this.maxFlags} flags!`;
    }
    return message;
  }
  
}
