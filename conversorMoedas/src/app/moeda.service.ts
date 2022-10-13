import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  result:any = ''
  coinValue:number = 0

  constructor() {
   }

   geraValor = new EventEmitter()

   getValorMoedaConvertida(tipoMoeda: string){
    fetch(`https://economia.awesomeapi.com.br/json/${tipoMoeda}`)
    .then(resp => resp.json())
    .then(data => {this.coinValue = data[0].high})
    return this.coinValue
   }

  getValorMoedaBruta(tipoMoeda: string){

    fetch(`https://economia.awesomeapi.com.br/json/${tipoMoeda}`)
    .then(resp => resp.json())
    .then(data => {this.result = data[0].high})
    return this.result
  }

}
