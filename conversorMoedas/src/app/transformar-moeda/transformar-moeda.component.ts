import { MoedaService } from './../moeda.service';
import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { moeda } from '../interface';

@Component({
  selector: 'app-transformar-moeda',
  templateUrl: './transformar-moeda.component.html',
  styleUrls: ['./transformar-moeda.component.css'],
})
export class TransformarMoedaComponent implements OnInit {


  descrMoedaB:string = ''
  descrMoedaC: string = ''
  valorConvertido: string = ''
  valorBruto2: string = ''
  valor: string = ''
  valorConv: string = ''
  moedaBruta:string = ''


  //declaração de event emitter com output
  //output é feito do componente filho para o componente pai
  @Output() infoMoedas = new EventEmitter()

  constructor(private moeda: MoedaService) { }

  ngOnInit(): void {
    this.moeda.geraValor.subscribe(
      valor => {
        this.eventGeraValor(valor)
    })

    this.moeda.geraValorConv.subscribe(
      valor => {
        this.eventGeraValorConv(valor)
      }
    )
  }

  eventGeraValor(valor:{tipoMoeda: string}){
    this.moeda.apiMoedas(valor.tipoMoeda, this.descrMoedaC)
    this.moeda.valorBruto.subscribe(
      result => {
        let total = Number(this.valor) * result.infoMoeda.moedaConv.maiorValor / result.infoMoeda.moedaBruta.maiorValor
        this.valorBruto2 = String(total) === '0' ? this.valor : String(total)
        this.infoMoedas.emit({
          result: result
        })
      })
  }
  eventGeraValorConv(valor:{tipoMoeda: string}){
    this.moeda.apiMoedas(valor.tipoMoeda, this.descrMoedaB)
    this.moeda.valorBruto.subscribe(
      result => {
        let total = Number(this.valorConv) * result.infoMoeda.moedaConv.maiorValor / result.infoMoeda.moedaBruta.maiorValor
        this.valorConvertido = String(total) === '0' ? this.valor : String(total)
        this.infoMoedas.emit({
          result: result
        })
      }
    )
  }

  valorBruto(value:string){
    this.valorConvertido = ''
    this.valorConv = ''
  }
  valorConver(value:string){
    this.valorBruto2 = ''
    this.valor = ''
  }

  verificaTipoMoeda(descrMoeda:string){
    this.descrMoedaB = descrMoeda
  }

  enviaMoeda(valueCoin:string){
    this.valor = valueCoin
    this.moeda.geraValor.emit({tipoMoeda: this.descrMoedaB})
  }

  alteraMoeda(descrMoeda:string){
    this.descrMoedaC = descrMoeda
  }

  enviaMoeda2(valueCoin:string){
    this.valorConv = valueCoin
    this.moeda.geraValorConv.emit({tipoMoeda: this.descrMoedaC})
  }

}
