import { RealService } from './../real.service';
import { MoedaService } from './../moeda.service';
import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { moeda } from '../interface';

@Component({
  selector: 'app-transformar-moeda',
  templateUrl: './transformar-moeda.component.html',
  styleUrls: ['./transformar-moeda.component.css'],
})
export class TransformarMoedaComponent implements OnInit {

  tipoMoedaTransformada:string = ''
  valorConvertido: number = 0
  valor: number = 0
  moedaBruta:string = ''
  descrMoedaBruta?: string
  descrMoedaConvert?: string
  objecMoedB?: moeda
  objecMoedC?: moeda

  //declaração de event emitter com output
  //output é feito do componente filho para o componente pai
  @Output() teste = new EventEmitter<string>()

  valors?: moeda

  constructor(private real: RealService, private moeda: MoedaService) { }

  ngOnInit(): void {
    this.moeda.geraValor.subscribe(
      valor => {
        this.moeda.apiMoedas(valor.tipoMoeda, this.tipoMoedaTransformada)
        this.moeda.valorBruto.subscribe(
          result =>{
            this.valorConvertido = result.valorBruto / result.valorConv * valor.valorBruto
            this.descricaoConvert(result.infoMoeda.moedaBruta, result.infoMoeda.moedaConv)
            this.valors = result.infoMoeda.moedaBruta
          })
        })
      }

      verificaTipoMoeda(value:string){
        this.teste.emit('deu certo')
    this.tipoMoedaTransformada = value
    return this.tipoMoedaTransformada
  }

  enviaMoeda(value:string){
    this.real.geraValor.emit({valorBruto: value, tipoMoeda: this.tipoMoedaTransformada})
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
