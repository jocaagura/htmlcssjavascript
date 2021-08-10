import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {
@Input() characters: Personaje[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
