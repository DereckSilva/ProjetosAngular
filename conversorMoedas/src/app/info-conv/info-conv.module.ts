import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformarMoedaComponent } from '../transformar-moeda/transformar-moeda.component';
import { InfoConvComponent } from './info-conv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    InfoConvComponent,
    TransformarMoedaComponent
  ],
  exports:[
    InfoConvComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class InfoConvModule { }
