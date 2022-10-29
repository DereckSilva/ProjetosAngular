import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealService {
  
  constructor() { }
  
  geraValor = new EventEmitter()
  valorBruto = new EventEmitter()
  valorConv = new EventEmitter()
  
  getMoedaConvertida(tipoMoedaBruta: string){
   
   fetch(`https://economia.awesomeapi.com.br/json/${tipoMoedaBruta}`)
   .then(resp => resp.json())
   .then(data => {this.valorBruto.emit({valorBruto: data[0].high})})
  }

  getMoedaBruta(tipoMoedaConvertida:string){
   fetch(`https://economia.awesomeapi.com.br/json/${tipoMoedaConvertida}`)
   .then(resp => resp.json())
   .then(data => {this.valorConv.emit({valorConv: data[0].high})})
  }
}
