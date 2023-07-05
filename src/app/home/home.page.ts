import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusquedaService } from '../services/buscar/busqueda.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pokemons: any[] = []; // Arreglo para almacenar todos los Pokémon
  filtroPokemons: any[] = []; // Arreglo para almacenar los Pokémon filtrados
  searchText = ''; // Texto de búsqueda

  constructor(
    private http: HttpClient,
    private busquedaService: BusquedaService
  ) {}

  ngOnInit() {
    // Obtener los datos de los Pokémon desde la API
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/')
      .subscribe(res => {
        console.log(res);
        this.pokemons = res.results; // Almacenar los Pokémon en el arreglo 'pokemons'
        this.filtroPokemons = this.pokemons; // Inicialmente, mostrar todos los Pokémon sin filtrar
      });
  }

  BuscarPokemon() {
    // Utilizar el servicio 'BusquedaService' para filtrar los Pokémon según el texto de búsqueda
    this.filtroPokemons = this.busquedaService.buscarPokemons(this.pokemons, this.searchText);
  }
}

