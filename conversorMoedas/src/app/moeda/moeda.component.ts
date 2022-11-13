import { RealService } from './../real.service';
import { MoedaService } from './../moeda.service';
import { Component, OnInit, Input } from '@angular/core';
import { moeda } from '../interface';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css']
})
export class MoedaComponent implements OnInit {

  constructor(private moedaService: MoedaService,private real: RealService,){
  }

  @Input('valorRecebido') valor: number = 0

  tipoMoeda:string = ''
  valorMoeda:number = 0
  tipoMoedaBruta: string = ''

  //vai ser removido
  descrMoedaBruta?: string
  descrMoedaConvert?: string
  objecMoedB?: moeda
  objecMoedC?: moeda


  ngOnInit(): void {
    this.real.geraValor.subscribe(
      valor => {
        this.real.apiMoedas(valor.tipoMoeda, this.tipoMoeda)
        this.real.valorBruto.subscribe(
          result =>{
            this.valor = result.valorBruto / result.valorConv * valor.valorBruto
            this.descricaoConvert(result.infoMoeda.moedaBruta, result.infoMoeda.moedaConv)
          })
    })
    }

  recebeMoeda(value:string){
    this.moedaService.geraValor.emit({valorBruto: value, tipoMoeda: this.tipoMoeda})
  }

  moeda(value:string){
    this.tipoMoeda = value
  }

  descricaoConvert(pDescr: moeda , sDescr:moeda){
    //definir descrição das moedas
    let descrMoedasB = pDescr.conversao.split('/')
    let descrMoedasC = sDescr.conversao.split('/')

    this.descrMoedaBruta =  descrMoedasB[0]
    this.descrMoedaConvert = descrMoedasC[0]
    this.objecMoedB = pDescr
    this.objecMoedC = sDescr
  }
}
