import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDeUsuariosComponent } from './lista-de-usuarios/lista-de-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeUsuariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
