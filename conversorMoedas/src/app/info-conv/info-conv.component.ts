import { Component, Input, OnInit } from '@angular/core';
import { moeda, info } from '../interface';
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
  infoMoedas(value:info){
    this.moedaBruta = value?.result?.infoMoeda?.moedaBruta
    this.moedaConv = value?.result?.infoMoeda?.moedaConv
  }

}
