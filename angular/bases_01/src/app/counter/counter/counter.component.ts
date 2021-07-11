import {Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
<h3>La base es <span>{{base}}</span></h3>

<button (click)="accumulate(base)">+{{base}}</button>
<span>{{counterNumber}}</span>
<button (click)="accumulate(-base)">-{{base}}</button>
    `
})
export class CounterComponent{
    title = 'Contador app';
    counterNumber: number = 0;
    base: number = 5;
  
    sum() {
      this.counterNumber++;
    }
    decrement() {
      this.counterNumber--;
    }
  
    accumulate(digit: number): void {
      this.counterNumber = this.counterNumber + digit;
    }
}