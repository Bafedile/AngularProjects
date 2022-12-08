import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [];
  evenNumbers = [];
  onlyOdd = false;
  value = 5;

  getOddNumbers() {
    this.oddNumbers.splice(0);
    this.evenNumbers.splice(0);
    for (let number of this.numbers) {
      if (number % 2 != 0) {
        this.oddNumbers.push(number);
      } else {
        this.evenNumbers.push(number);
      }
    }

    if (this.onlyOdd) {
      this.onlyOdd = false;
    } else {
      this.onlyOdd = true;
    }
  }




}
