import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonsComponent } from '../card-buttons/card-buttons.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardComponent } from '../card/card.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';
import {MatSliderModule} from '@angular/material/slider';


//preciso importar meus componetes para esse modulo

@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonsComponent,
    CardButtonCancelComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports: [ //exportar componentes pro modulo que estou herdando
    CardComponent,
    CardRoxoComponent,
    CardButtonsComponent
  ],
})
export class CardsModule { }
