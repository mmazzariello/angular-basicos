import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

// Tarea:
// 1-Crear modulo para Contador
// 2-Añadir las declaraciones y exportaciones

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HeroesModule, ContadorModule, DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
