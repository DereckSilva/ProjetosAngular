import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoedasService {
  result:any = ''
  constructor() { }

  getValor(tipoMoeda: string, valor:number){
    fetch(`https://economia.awesomeapi.com.br/json/${tipoMoeda}`)
    .then(resp => resp.json())
    .then(data => {this.result = data[0].high*valor})
    console.log(this.result)
    return this.result
  }
}
