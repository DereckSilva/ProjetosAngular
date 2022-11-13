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
  valorConvertido: number = 0
  valorBruto2: number = 0
  valor: number = 0
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
        this.valorBruto2 = 4525
        this.infoMoedas.emit({
          result
        })
      })
  }
  eventGeraValorConv(valor:{tipoMoeda: string}){
    this.moeda.apiMoedas(valor.tipoMoeda, this.descrMoedaB)
    this.moeda.valorBruto.subscribe(
      result => {
        this.valorConvertido = 4525
        this.infoMoedas.emit({
          result
        })
      }
    )
  }

  verificaTipoMoeda(descrMoeda:string){
    this.descrMoedaB = descrMoeda
  }

  enviaMoeda(valueCoin:string){
    this.moeda.geraValor.emit({tipoMoeda: this.descrMoedaB})
  }

  alteraMoeda(descrMoeda:string){
    this.descrMoedaC = descrMoeda
  }

  enviaMoeda2(valueCoin:string){
    this.moeda.geraValorConv.emit({tipoMoeda: this.descrMoedaC})
  }

}
