import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealService {

  result:number = 0
  coinValue:number = 0
  
  constructor() { }
  
  geraValor = new EventEmitter()
  getMoedaConvertida(tipoMoedaBruta: string, tipoMoedaConvertida:string){
    
    fetch(`https://economia.awesomeapi.com.br/json/${tipoMoedaBruta}`)
    .then(resp => resp.json())
    .then(data => {this.coinValue = data[0].high})
    
    fetch(`https://economia.awesomeapi.com.br/json/${tipoMoedaConvertida}`)
    .then(resp => resp.json())
    .then(data => {this.result = data[0].high})

    return this.coinValue / this.result
   }
}
