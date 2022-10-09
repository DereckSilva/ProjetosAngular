import { TransformarMoedaComponent } from './transformar-moeda.component';
import { MoedaComponent } from './../moeda/moeda.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TransformarMoedaComponent,
    MoedaComponent
  ],
  exports:[
    TransformarMoedaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransformarMoedaModule { }
