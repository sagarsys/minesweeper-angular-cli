import { Component, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/takeUntil';
import {Observer} from 'rxjs/Observer';
import {Subject} from 'rxjs/Subject';
import {TimerService} from './timer.service';

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
  
  elapsedTime: number;
  timer$;
  
  constructor(private timerService: TimerService) {}
  
  ngOnInit(): void {
    this.timer$ = this.timerService.getTimer$();
    const observer: Observer<any> = {
      next: (value) => this.elapsedTime = value,
      error: (err) => console.log(err),
      complete: () => this.elapsedTime
    };
    this.elapsedTime = this.timer$.subscribe(observer);
    this.elapsedTime = 0;
    setTimeout(() => this.timer$.complete(), 20000);
  }
  
}
