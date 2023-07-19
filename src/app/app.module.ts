import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ErrorComponent } from './components/error/error.component';
import { ChoferComponent } from './components/chofer/chofer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavegadorComponent,
    CabeceraComponent,
    PieComponent,
    UsuarioComponent,
    VehiculoComponent,
    ErrorComponent,
    ChoferComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
