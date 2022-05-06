import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  offset = 0;
  pokemon = [];
  @ViewChild(IonInfiniteScroll) infinte: IonInfiniteScroll;

  constructor(private pokeService:PokemonService) {}

  ngOnInit(){
    this.loadPokemon();
  }
  loadPokemon(loadMore = false, event?){
    if(loadMore){
      this.offset += 25;
    }
    this.pokeService.getPokemon(this.offset).subscribe(result => {
      console.log('result: ', result);
      this.pokemon = [...this.pokemon,...result];

      if(event){
        event.target.complete();
      }
      //Set to 125 as 25 is already loaded and theres only 150 pokemon in Gen 1
      //infinite scroll disabled after 150 loaded as nothing left to load 
      if(this.offset == 125){
        this.infinte.disabled = true;
      }
    });
  }

  //Search for specific Pokemon from ion searchbar
  onSearchChange(e){
    let value = e.detail.value;

    if(value == '') {
      this.offset = 0;
      this.loadPokemon();
      return;
    }

    this.pokeService.findPokemon(value).subscribe(result =>{
      this.pokemon = [result];
    }, err => {
      this.pokemon = [];
    });
  }
}