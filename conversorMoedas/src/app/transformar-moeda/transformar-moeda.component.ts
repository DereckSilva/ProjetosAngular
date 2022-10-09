import { MoedaService } from './../moeda.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transformar-moeda',
  templateUrl: './transformar-moeda.component.html',
  styleUrls: ['./transformar-moeda.component.css'],
  providers: [MoedaService]
})
export class TransformarMoedaComponent implements OnInit {

  tipoMoeda?:string
  valorConvertido?: string

  constructor() { }

  ngOnInit(): void {

  }

  verificaTipoMoeda(value:string){
    this.tipoMoeda = value
    return this.tipoMoeda
  }

  converterMoeda(valor:any){
    return this.valorConvertido = valor.moedaBruta
  }

}
