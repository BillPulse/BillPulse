import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BillinfoPage } from '../billinfo/billinfo';

/**
 * Generated class for the BillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bills',
  templateUrl: 'bills.html',
})
export class BillsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillsPage');
  }

  items = [
  	'Children',
  	'Education',
  	'Health',
  	'Law',
  	'Transportation',
  ];
  
  itemSelected(event, item) {
    this.navCtrl.push(BillinfoPage, {
    	item: item
    })
  }

}
