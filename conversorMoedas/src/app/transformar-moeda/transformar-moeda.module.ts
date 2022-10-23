import { RealService } from './../real.service';
import { MoedaService } from './../moeda.service';
import { FormsModule } from '@angular/forms';
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
    CommonModule,
    FormsModule
  ],
  providers:[
    MoedaService,
    RealService
  ]
})
export class TransformarMoedaModule { }
