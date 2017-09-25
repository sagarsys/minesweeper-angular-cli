import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-statistics',
  template: `<div class="stats">
              <p>Flags Found: <span>{{ numFlags }} / {{ maxFlags }}</span></p>
              <p>Bombs: {{ maxBombs }}</p>
            </div>`,
  styleUrls: ['./statistics.component.scss']
})

export class StatisticsComponent implements OnInit {
  
  @Input() numFlags: number;
  @Input() maxFlags: number;
  @Input() maxBombs: number;
  
  ngOnInit(): void {
    this.numFlags = 0;
  }
  
  
  
}
