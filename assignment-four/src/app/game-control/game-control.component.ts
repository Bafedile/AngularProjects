import { Component, EventEmitter, Output, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;
  num;
  numbers = [];
@ContentChild('gameContent')gameContent:ElementRef;
  onStartGame() {
    this.interval = setInterval(() => {
      this.num = this.lastNumber + 1;
      this.numbers.push(this.num);
      this.intervalFired.emit(this.num);
      this.lastNumber++;
    }, 1000);
  }

  
  onPauseGame() {
    clearInterval(this.interval);
  }
}
