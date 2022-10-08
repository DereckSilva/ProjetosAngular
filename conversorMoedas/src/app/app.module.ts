import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransformarMoedaComponent } from './transformar-moeda/transformar-moeda.component';

@NgModule({
  declarations: [
    AppComponent,
    TransformarMoedaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
