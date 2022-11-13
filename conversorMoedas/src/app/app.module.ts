
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoConvModule } from './info-conv/info-conv.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InfoConvModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
