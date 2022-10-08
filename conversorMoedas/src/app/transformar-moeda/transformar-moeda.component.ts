import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transformar-moeda',
  templateUrl: './transformar-moeda.component.html',
  styleUrls: ['./transformar-moeda.component.css']
})
export class TransformarMoedaComponent implements OnInit {

  constructor() { }

  valorMoeda?: string
  valorConvertido?: string

  ngOnInit(): void {
    
  }
  teste(value:string){
    let value35 = Number(value) * 5
    return this.valorConvertido = value35.toString()
  }
}
