import {Component, Input, OnInit} from '@angular/core';

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
  
  ngOnInit(): void {
    this.elapsedTime = 0;
  }
  
}
