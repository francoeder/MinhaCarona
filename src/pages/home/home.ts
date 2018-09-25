import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SavePage } from '../save/save';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public add() {
    this.navCtrl.push(SavePage);
  }

}
