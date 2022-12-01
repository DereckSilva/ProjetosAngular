import { Component, Input, OnInit } from '@angular/core';
import { moeda, infoM } from '../interface';
//tornar componente pai
@Component({
  selector: 'app-info-conv',
  templateUrl: './info-conv.component.html',
  styleUrls: ['./info-conv.component.css']
})
export class InfoConvComponent implements OnInit {

  moedaBruta?: moeda;
  moedaConv?: moeda;

  constructor() { }

  ngOnInit(): void {
  }

  //parametrizar informações que vem do componente filho
  infoMoedas(value:infoM){
    this.moedaBruta = value?.result?.infoMoeda?.moedaBruta
    this.moedaConv = value?.result?.infoMoeda?.moedaConv

    this.moedaBruta.data = this.formataData(this.moedaBruta.data.split(' ')[0])
    this.moedaConv.data = this.formataData(this.moedaConv.data.split(' ')[0])
  }

  formataData(date:string){

    if(date.includes('/')) return date

    let ano = date.slice(0,4)
    let mes = date.slice(5, 7)
    let dia = date.slice(8,10)
    date = `${dia}/${mes}/${ano}`
    return date
  }

}
