import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  result:any = ''
  constructor() {
   }

  calcula(tipoMoeda: string){

    fetch(`https://economia.awesomeapi.com.br/json/${tipoMoeda}`)
    .then(resp => resp.json())
    .then(data => {this.result = data[0].high})
    return this.result
  }

}
