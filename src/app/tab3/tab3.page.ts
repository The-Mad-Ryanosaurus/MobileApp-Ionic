import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  offset = 0;
  pokemon = [];

  constructor(private pokeService:PokemonService) {}

  ngOnInit(){
    this.loadPokemon();
  }
  loadPokemon(){
    this.pokeService.getPokemon(this.offset).subscribe(result => {
      console.log('result: ', result);
      this.pokemon = result;
    })
  }

}