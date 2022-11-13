import { ThisReceiver } from '@angular/compiler';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  constructor() { }

  /*func api */
   geraValor = new EventEmitter()
   valorBruto = new EventEmitter()

   geraValorConv = new EventEmitter()

  apiMoedas =  async(valorBruto:string, secCoin:string):Promise<void> =>{

    const data = await fetch(`https://economia.awesomeapi.com.br/json/${valorBruto}`)
    const json = await data.json()

    const dataC = await fetch(`https://economia.awesomeapi.com.br/json/${secCoin}`)
    const jsonC = await dataC.json()

    return this.valorBruto.emit({valorBruto: json[0].high, valorConv: jsonC[0].high,
      infoMoeda: {
        moedaBruta: {
          conversao: json[0].name,
          maiorValor: json[0].high,
          menorValor: json[0].low,
          data: json[0].create_date
        },
        moedaConv: {
          conversao: jsonC[0].name,
          maiorValor: jsonC[0].high,
          menorValor: jsonC[0].low,
          data: jsonC[0].create_date
        }
      }
    })
  }
}
