import { MoedasService } from './../moedas.service';
import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css'],
  providers:[MoedasService]
})
export class MoedaComponent implements OnInit {

  constructor(){
    console.log(this.valor)
  }

  @Input('valorRecebido') valor: number = 10 
  
  @Output() moedaBruta = new EventEmitter()

  tipoMoeda?:string
  valorConvertido?: string

  ngOnInit(): void {
    
  }

  recebeMoeda(value:string){
    let value35 = Number(value) * 5
    return this.moedaBruta.emit({moedaBruta: value35})
  }

  moeda(value:string){
    this.tipoMoeda = value
    return this.moedaBruta.emit({moeda: value})
  }
}
