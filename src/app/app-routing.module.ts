import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) // Cargar módulo de la página de inicio
  },
  {
    path: '',
    redirectTo: 'home', // Redirigir la ruta raíz a la página de inicio
    pathMatch: 'full'
  },
  {
    path: 'detalles/:i+1', // Ruta para los detalles del Pokémon
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule) // Cargar módulo de la página de detalles
  },
  {
    path: '**', // Ruta para redireccionar cualquier otra dirección
    redirectTo: 'home' // Redirigir a la página de inicio
  }
];

@NgModule({
  imports: [
    HttpClientModule, // Importar el módulo HttpClient para realizar solicitudes HTTP
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) // Configuración de las rutas
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
