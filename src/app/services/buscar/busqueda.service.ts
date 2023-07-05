import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  buscarPokemons(pokemons: any[], searchText: string): any[] {
    if (!searchText) {
      return pokemons;
    }

    const filtroPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchText.toLowerCase()));
    return filtroPokemons;
  }
}