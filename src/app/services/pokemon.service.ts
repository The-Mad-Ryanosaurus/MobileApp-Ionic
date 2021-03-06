import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //base url for the api and the image url for the images associated to each pokemon in the api
  baseUrl = 'https://pokeapi.co/api/v2';
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  //used to map/display the api and all its contents/pokemon along with the images
  constructor(private http:HttpClient) { 
  }
  getPokemon(offset = 0){
    return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=25`)
    .pipe(map(mresult => {
      return mresult['results'];
    }),
    map(pokemon => {
      return pokemon.map((poke, index) => {
        poke.image = this.getPokeImage(index + offset + 1);
        poke.pokeIndex = offset + index + 1;
        return poke;
      });
    })
    )
  }
  //gets the images matched to the pokemon
  getPokeImage(index){
    return `${this.imageUrl}${index}.png`;
  }
  //service for finding a pokemon by name/id from searchbar by use of pip/maps
  //search only works if full name is put in - eg "Bulbasaur"
  findPokemon(search){
    return this.http.get(`${this.baseUrl}/pokemon/${search}`).pipe(
      map(pokemon => {
        pokemon['image'] = this.getPokeImage(pokemon['id']);
        pokemon['pokeIndex'] = pokemon['name'];
        return pokemon;
      })
    );
  }

  //gets poke info, filters sprite images and returns pokemon
  getPokeDetails(index){
    return this.http.get(`${this.baseUrl}/pokemon/${index}`).pipe(
      map(poke => {
        let sprites = Object.keys(poke['sprites']);
        poke['images'] = sprites
        .map(spriteKey => poke['sprites'][spriteKey])

        .filter(img => {
          console.log(img);
          return img != null && typeof img === 'string' 
        });
        return poke;
      })
    );
  }
}
