import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { BillinfoPage } from '../billinfo/billinfo';
import { WhatisabillPage } from '../whatisabill/whatisabill';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  item: string;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  itemSelected(item){
  	this.item = item;
  	console.log(item);
  	this.navCtrl.push(BillinfoPage, {
  		data: item
  	});
  }

  billSelected(item){
    this.navCtrl.push(WhatisabillPage,{

    });
  }

  featureDevelopment(){
    let alert = this.alertCtrl.create({
        title: 'IN DEVELOPMENT',
        subTitle: 'This feature is currently in development. The creators can provide information of what to expect',
        buttons: ['OK']

      
      });
      alert.present();
  }

}
