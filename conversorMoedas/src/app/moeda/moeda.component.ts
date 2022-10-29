import { RealService } from './../real.service';
import { MoedaService } from './../moeda.service';
import { Component, OnInit, Input } from '@angular/core';

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


  ngOnInit(): void {
    this.real.geraValor.subscribe(
      valor => {
        this.real.getMoedaConvertida(valor.tipoMoeda)
        this.real.getMoedaBruta(this.tipoMoeda)
        this.real.valorBruto.subscribe(
          bruto => { this.real.valorConv.subscribe(
            conv => {this.valor = bruto.valorBruto/ conv.valorConv * valor.valorBruto}
          )}
        )
      })
    }

  recebeMoeda(value:string){
    this.moedaService.geraValor.emit({valorBruto: value, tipoMoeda: this.tipoMoeda})
  }

  moeda(value:string){
    this.tipoMoeda = value
  }
}
