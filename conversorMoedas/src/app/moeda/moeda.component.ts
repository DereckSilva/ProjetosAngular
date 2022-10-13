import { RealService } from './../real.service';
import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css'],
  providers:[RealService]
})
export class MoedaComponent implements OnInit {

  constructor(){
  }

  @Input('valorRecebido') valor: number = 0 
  
  @Output() moedaBruta = new EventEmitter()

  tipoMoeda?:string
  valorMoeda?:number
  valorConvertido?: string

  ngOnInit(): void {
    
  }

  recebeMoeda(value:string){
    let value35 = Number(value) * 5
    this.valorMoeda = Number(value)
    return this.moedaBruta.emit({coin: value35, moeda: this.tipoMoeda})
  }

  moeda(value:string){
    this.tipoMoeda = value
    return this.moedaBruta.emit({moeda: value, coin:this.valorMoeda })
  }
}
