import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  
  myStatus:string;
  inputText:string;

  constructor(public navCtrl:NavController, private storage:Storage) { }

  async ngOnInit() {
    await this.storage.create()
    this.myStatus = await this.storage.get("Status")
    this.inputText = await this.storage.get("TrainerName")
  }

  async setData(){

    await this.storage.create()
    await this.storage.set("Status", this.myStatus)
    await this.storage.set("TrainerName", this.inputText)
    

  }

}
