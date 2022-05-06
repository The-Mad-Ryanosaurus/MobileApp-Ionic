import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isTorch = false;
  
  constructor(private flashlight: Flashlight) {}
  onFlashlight(){
    if(this.flashlight.available()){
      this.isTorch = false;
      this.flashlight.switchOn();
    }else{
      alert("Flashlight Not Available");
    }
  }
  offFlashlight(){
    this.isTorch = true;
    this.flashlight.switchOff();
  }
}