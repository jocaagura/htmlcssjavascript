import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America',
  ];
  public deletedHero: string = '';

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  deleteHero() {
    this.deletedHero = this.heroes.pop() || '';
  }
}
