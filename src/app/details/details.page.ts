import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  details: any;
  
  //slideopts autoplay will auto scroll through the sprites on the detail page
  slideOpts = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }

  };

  //constructer to get the ID and Index of a pokemon to display information in the details page. Gets it from the URL
  constructor(private route: ActivatedRoute, private pokeService: PokemonService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getPokeDetails(index).subscribe(details => {
      // console.log('Details: ', details);
      this.details = details;
    })
  }

}
