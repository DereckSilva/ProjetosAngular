import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RealService {

  constructor() { }

  geraValor = new EventEmitter()
  valorBruto = new EventEmitter()

  apiMoedas =  async(valorBruto:string, valorConv:string):Promise<void> =>{

    const data = await fetch(`https://economia.awesomeapi.com.br/json/${valorBruto}`)
    const json = await data.json()
    const data2 = await fetch(`https://economia.awesomeapi.com.br/json/${valorConv}`)
    const json2 = await data2.json()
    return this.valorBruto.emit({valorBruto: json[0].high, valorConv:json2[0].high,
      infoMoeda: {
        moedaBruta: {
          conversao: json[0].name,
          maiorValor: json[0].high,
          menorValor: json[0].low,
          data: json[0].create_date
        },
        moedaConv: {
          conversao: json2[0].name,
          maiorValor: json2[0].high,
          menorValor: json2[0].low,
          data: json2[0].create_date
        }
      }})

  }
}
