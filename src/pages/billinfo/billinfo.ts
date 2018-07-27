import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BillinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-billinfo',
  templateUrl: 'billinfo.html',
})
export class BillinfoPage {
  billName: string;
  readClicked: boolean;
  followButton: string;
  followindicate: boolean;
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  	this.billName = navParams.get('data');
  	this.readClicked = false;
  	this.followButton = "FOLLOW";
  	this.followindicate = false;
  }

  onReadClick(){
  		this.readClicked =!this.readClicked;

  		let alert = this.alertCtrl.create({
		    title: 'Read More',
		    subTitle: 'This will provide additional information about the bill',
		    buttons: ['OK']

	    
	    });
    	alert.present();
  }

  followClicked(){
  	if(this.followindicate){
  		this.followButton = "FOLLOW";
  	}
  	else{
  		this.followButton = "FOLLOWED";
  	}
  		this.followindicate =! this.followindicate;
  }

 showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Rate this Bill');

    alert.addInput({
      type: 'radio',
      label: 'Strongly Agree',
      value: 'five',
      checked: true
    });

     alert.addInput({
      type: 'radio',
      label: 'Agree',
      value: 'four'
    });

     alert.addInput({
      type: 'radio',
      label: 'Neutral',
      value: 'three'
    });

     alert.addInput({
      type: 'radio',
      label: 'Disagree',
      value: 'two'
    });

     alert.addInput({
      type: 'radio',
      label: 'Strongly Disagree',
      value: 'one'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillinfoPage');
  }

}
