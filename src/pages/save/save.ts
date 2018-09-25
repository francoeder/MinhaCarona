import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";

/**
 * Generated class for the SavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-save',
  templateUrl: 'save.html',
})
export class SavePage {

  caronaGroup = {
    'code': '',
    'name': ''
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dbService: FirebaseServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SavePage');
  }

  public save(caronaGroup) {
    this.dbService.save(caronaGroup);
  }

}
