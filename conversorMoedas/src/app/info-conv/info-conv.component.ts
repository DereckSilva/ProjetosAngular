import { Component, Input, OnInit } from '@angular/core';
import { moeda } from '../interface';
//tornar componente pai
@Component({
  selector: 'app-info-conv',
  templateUrl: './info-conv.component.html',
  styleUrls: ['./info-conv.component.css']
})
export class InfoConvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  //parametrizar informações que vem do componente filho
  infoMoedas(value:string){
    console.log(value)
  }

}
