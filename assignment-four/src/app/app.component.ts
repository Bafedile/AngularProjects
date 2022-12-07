import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-four';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  number: number;
  onIntervalFired(firedNumber: number) {
    this.number = firedNumber;

    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
