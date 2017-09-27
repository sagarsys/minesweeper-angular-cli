import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {Subscriber} from 'rxjs/Subscriber';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/takeUntil';

@Injectable()
export class TimerService {
  
  private timer$: Observable<number>;
  
  getTimer$() {
    this.timer$ = Observable.interval(1000);
    return this.timer$;
  }
  
  stopTimer() {
  
  }
  
}
