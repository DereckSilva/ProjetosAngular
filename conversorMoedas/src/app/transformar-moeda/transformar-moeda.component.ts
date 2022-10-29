import { RealService } from './../real.service';
import { MoedaService } from './../moeda.service';
import { Component, OnInit} from '@angular/core';

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

  constructor(private real: RealService, private moeda: MoedaService) { }

  ngOnInit(): void {
    this.moeda.geraValor.subscribe(
      valor => {
      this.moeda.getMoedaConvertida(valor.tipoMoeda)
      this.moeda.getMoedaBruta(this.tipoMoedaTransformada)
      this.moeda.valorBruto.subscribe(
        bruto => { this.moeda.valorConv.subscribe(
          conv => {this.valorConvertido = bruto.valorBruto/ conv.valorConv * valor.valorBruto}
        )}
      )
    })
  }

  verificaTipoMoeda(value:string){
    this.tipoMoedaTransformada = value
    return this.tipoMoedaTransformada
  }

  enviaMoeda(value:string){
    this.real.geraValor.emit({valorBruto: value, tipoMoeda: this.tipoMoedaTransformada})
  }

}
