import { MoedaService } from './../moeda.service';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transformar-moeda',
  templateUrl: './transformar-moeda.component.html',
  styleUrls: ['./transformar-moeda.component.css'],
  providers: [MoedaService]
})
export class TransformarMoedaComponent implements OnInit {

  tipoMoedaTransformada:string = ''
  valorConvertido?: string
  valor: number = 0   
  moedaBruta:string = ''

  constructor(private moedaService: MoedaService) { }

  ngOnInit(): void {

  }

  verificaTipoMoeda(value:string){
    this.tipoMoedaTransformada = value
    return this.tipoMoedaTransformada
  }

  enviaMoeda(value:string){
    let valorMoeda = 0
    let resultConversao 
    //valor de um componente sendo enviado para outro
    console.log(this.tipoMoedaTransformada)
    console.log(this.moedaBruta)
    console.log(this.moedaService.calcula(this.tipoMoedaTransformada))
    console.log(this.moedaService.getValorMoeda(this.moedaBruta))

    valorMoeda = this.moedaService.calcula(this.tipoMoedaTransformada) / this.moedaService.getValorMoeda(this.moedaBruta)
    resultConversao = Number(value)*valorMoeda
    console.log(valorMoeda)
    console.log(resultConversao)
    this.valor = Number(resultConversao.toFixed(3))
  }

  //enviar moeda bruta
  converterMoeda(valor:any){
    this.moedaBruta = valor.moeda
    return this.valorConvertido = valor.coin
  }

}
