import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

interface Personaje {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  characters: Personaje[] = [
    {
      name: 'Goku',
      power: 1500,
    },
    {
      name: 'Vegeta',
      power: 220,
    },
  ];

  nuevo: Personaje = {
    name: '',
    power: 1,
  };

  changeName(event: any) {
    console.log(event.target.value);
  }
  addCharacter() {
    if (this.nuevo.name.trim().length == 0) {
      return;
    }
    if (this.nuevo.power < 1) {
      this.nuevo.power = 1;
    }

    const newCharacter = this.nuevo;
    // si existe lo reemplazamos
    let index = -1;
    this.characters.forEach(function (val, indexTmp) {
      if (newCharacter.name.toLowerCase() === val.name.toLowerCase()) {
        index = indexTmp;
      }
    });

    if (index === -1) {
      this.characters.push(newCharacter);
    } else {
      this.characters[index] = newCharacter;
    }

    this.nuevo = {
      name: '',
      power: 1,
    };
    console.log('Hola', newCharacter);
  }

  constructor() {}

  ngOnInit(): void {}
}
