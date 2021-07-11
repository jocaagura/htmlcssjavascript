import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  name: string = 'Iron man';
  age: number = 45;

  get nameUppercase(): string {
    return this.name.toUpperCase();
  }

  printName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
      this.age = 40;
  }
}
