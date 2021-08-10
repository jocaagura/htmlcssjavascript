import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [MainPageComponent, CharactersComponent, FormComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
