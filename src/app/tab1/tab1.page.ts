import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public platform: Platform, public navCtrl: NavController) {}

  openPokeData(){
    this.platform.ready().then(()=>{
      let browser = new InAppBrowserObject("https://pokemondb.net/pokedex")
    });
  }

}
