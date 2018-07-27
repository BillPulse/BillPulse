import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the YouractivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-youractivity',
  templateUrl: 'youractivity.html',
})
export class YouractivityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YouractivityPage');
  }

   items = [
  	'You rated 5 stars for Bill 1',
  	'You reviewed Bill 1',
  	'You added Bill 2 to your Followed Bills',
  	'You added Bill 3 to your Followed Bills',
  	'You rated 3 stars for Bill 3',
  ];
  

}
