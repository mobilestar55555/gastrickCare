import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThirdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  submitData: any;
  genderInfo: any;
  otherInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.genderInfo = navParams.get('genderInfo');
    this.submitData = navParams.get('submitData');
    console.log(this.submitData);
    this.otherInfo = navParams.get('otherInfo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThirdPage');
  }


  goNext() {
  }

  goPrev() {
    this.navCtrl.pop();
  }
}
