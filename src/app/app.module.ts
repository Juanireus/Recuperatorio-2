import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent], // Declaración del componente principal de la aplicación
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule], // Importar módulos necesarios
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], // Proveedor para la estrategia de reutilización de rutas
  bootstrap: [AppComponent], // Componente raíz de la aplicación
})
export class AppModule {}
