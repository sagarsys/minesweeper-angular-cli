import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cell} from './cell';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-cell',
  template: `<div class="cell"
                  (click)="onCellClick($event, cell)">
             </div>`,
  styleUrls: ['./cell.component.scss']
})

export class CellComponent {
  
  @Input() cell: Cell;
  @Output() cellClick = new EventEmitter();
  
  onCellClick($event, cell: Cell): void {
    $event.target.classList.add('is-clicked');
    
    if (cell.isMine) {
      $event.target.classList.add('is-mine');
    } else if (cell.isFlag) {
      $event.target.classList.add('is-flag');
    }
    
    this.cellClick.emit(cell);
  }
  
}
