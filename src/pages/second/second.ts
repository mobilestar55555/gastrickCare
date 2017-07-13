import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  activityLevel:any = '0';
  height:any = '5.5';
  submitted: boolean = false;
  submitData: {gender?: string, genderInfo?: any, age?: number, weight?: number, activityLevel?:any, weightMonth?: number, height?: number} = {};
  genderInfo: {breastfeeding?: any, nondiabetic?: any, prediabetes?: any, postpregancy?: any, none?: any} = {};
  otherInfo: {nogluten?: any, noissue?: any, nokidney?: any} = {};

  submitDataWarning: string = ''
  submitDataWarning2: string = ''

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.submitData.gender = 'female';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  goNext() {
    this.submitted = true;

    console.log(this.submitData);
    console.log(this.isEmpty(this.genderInfo));
    console.log(this.genderInfo);
    console.log(this.otherInfo);

    if (this.isEmpty(this.submitData) || this.isEmpty(this.genderInfo) || this.isEmpty(this.otherInfo))
      return;

    
    this.navCtrl.push('ThirdPage', {submitData: this.submitData, genderInfo: this.genderInfo, otherInfo: this.otherInfo});
  }

  isEmpty(obj: Object): boolean {
    if (!obj)
      return true;

    let keys= Object.keys(obj);
    for (let i=0; i<keys.length; i++) {
      if (obj[keys[i]])
        return false;
    }
    
    return true;
  }
}
