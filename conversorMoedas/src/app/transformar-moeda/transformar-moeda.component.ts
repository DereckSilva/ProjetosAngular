import { MoedaService } from './../moeda.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transformar-moeda',
  templateUrl: './transformar-moeda.component.html',
  styleUrls: ['./transformar-moeda.component.css'],
  providers: [MoedaService]
})
export class TransformarMoedaComponent implements OnInit {

  tipoMoeda:string = ''
  valorConvertido?: string
  valor: number = 0 
  moeda:string =''

  constructor(private moedaService: MoedaService) { }

  ngOnInit(): void {

  }

  verificaTipoMoeda(value:string){
    this.tipoMoeda = value
    return this.tipoMoeda
  }

  enviaMoeda(value:string){
    //valor de um componente sendo enviado para outro
    this.valor = this.moedaService.calcula(this.tipoMoeda) * Number(value)
  }

  //enviar moeda bruta
  converterMoeda(valor:any){
    this.moeda = valor.moeda
    return this.valorConvertido = valor.moedaBruta
  }

}
