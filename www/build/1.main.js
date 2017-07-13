webpackJsonp([1],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second__ = __webpack_require__(265);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageModule", function() { return SecondPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SecondPageModule = (function () {
    function SecondPageModule() {
    }
    return SecondPageModule;
}());
SecondPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__second__["a" /* SecondPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__second__["a" /* SecondPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__second__["a" /* SecondPage */]
        ]
    })
], SecondPageModule);

//# sourceMappingURL=second.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SecondPage = (function () {
    function SecondPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.activityLevel = '0';
        this.height = '5.5';
        this.submitted = false;
        this.submitData = {};
        this.genderInfo = {};
        this.otherInfo = {};
        this.submitDataWarning = '';
        this.submitDataWarning2 = '';
        this.submitData.gender = 'female';
    }
    SecondPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SecondPage');
    };
    SecondPage.prototype.goNext = function () {
        this.submitted = true;
        console.log(this.submitData);
        console.log(this.isEmpty(this.genderInfo));
        console.log(this.genderInfo);
        console.log(this.otherInfo);
        if (this.isEmpty(this.submitData) || this.isEmpty(this.genderInfo) || this.isEmpty(this.otherInfo))
            return;
        this.navCtrl.push('ThirdPage', { submitData: this.submitData, genderInfo: this.genderInfo, otherInfo: this.otherInfo });
    };
    SecondPage.prototype.isEmpty = function (obj) {
        if (!obj)
            return true;
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (obj[keys[i]])
                return false;
        }
        return true;
    };
    return SecondPage;
}());
SecondPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-second',template:/*ion-inline-start:"/Data/gastrickCare/src/pages/second/second.html"*/'<!--\n  Generated template for the SecondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <!--ion-navbar>\n    <ion-title>\n      Gastric Bypass Alternative\n    </ion-title>\n  </ion-navbar-->\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <img src="assets/images/navigate.png" class="navigator">\n  </div>\n\n    <ion-item class="text-color-gray">\n      <ion-label>submitData.gender</ion-label>\n      <ion-select [(ngModel)]="submitData.gender" (ionChange)="genderInfo = {}">\n        <ion-option value="female">Female</ion-option>\n        <ion-option value="male">Male</ion-option>\n      </ion-select>\n    </ion-item>\n\n  <div *ngIf="submitData.gender == \'male\'">\n    <ion-item class="text-color-gray">\n      <ion-label>Non-diabetic</ion-label>\n      <ion-checkbox [(ngModel)]="genderInfo.nondiabetic" checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item class="text-color-gray">\n      <ion-label>Pre/Diabetes</ion-label>\n      <ion-checkbox [(ngModel)]="genderInfo.prediabetes"></ion-checkbox>\n    </ion-item>\n    <div *ngIf="submitted && submitData.gender == \'male\' && isEmpty(genderInfo)"  class="gfield_description validation_message" style="color: rgb(244, 67, 54); font-family: &quot;Open Sans&quot;;">This field is required.</div>\n  </div>\n\n  <div  *ngIf="submitData.gender == \'female\'">\n    <ion-item class="text-color-gray">\n      <ion-label>Breastfeeding</ion-label>\n      <ion-checkbox [(ngModel)]="genderInfo.breastfeeding"></ion-checkbox>\n    </ion-item>\n\n    <ion-item class="text-color-gray">\n      <ion-label>Post-pregnancy</ion-label>\n      <ion-checkbox [(ngModel)]="genderInfo.postpregancy"></ion-checkbox>\n    </ion-item>\n\n    <ion-item class="text-color-gray">\n      <ion-label>Pre/Diabetes</ion-label>\n      <ion-checkbox [(ngModel)]="genderInfo.prediabetes"></ion-checkbox>\n    </ion-item>\n\n    <ion-item class="text-color-gray">\n      <ion-label>None</ion-label>\n      <ion-checkbox [(ngModel)]="genderInfo.none"></ion-checkbox>\n    </ion-item>\n\n    <div *ngIf="submitted && submitData.gender == \'female\' && isEmpty(genderInfo)" class="gfield_description validation_message" style="color: rgb(244, 67, 54); font-family: &quot;Open Sans&quot;;">This field is required.</div>\n  </div>\n\n  <div class="separator-part">\n    <ion-item class="text-color-gray">\n      <ion-input type="text" placeholder="Age" [(ngModel)]="submitData.age"></ion-input>\n    </ion-item>\n    <div *ngIf="submitted && (!submitData.age)" class="gfield_description validation_message" style="color: rgb(244, 67, 54); font-family: &quot;Open Sans&quot;;">This field is required.</div>\n\n    <ion-item class="separator-item text-color-gray">\n      <ion-label>Your activity level</ion-label>\n      <ion-select [(ngModel)]="submitData.activityLevel">\n        <ion-option value="0">not really active</ion-option>\n        <ion-option value="1">moderately active</ion-option>\n        <ion-option value="2">on the move most of the day</ion-option>\n        <ion-option value="3">on the move and I also exercise</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class="separator-item text-color-gray">\n      <ion-input type="text" placeholder="Your weight now" [(ngModel)]="submitData.weight" ></ion-input>\n    </ion-item>\n    <div *ngIf="submitted && (!submitData.weight)" class="gfield_description validation_message" style="color: rgb(244, 67, 54); font-family: &quot;Open Sans&quot;;">This field is required.</div>\n    <div *ngIf="submitted && (submitData.weight<165 || submitData.weight>600)" class="gfield_description validation_message" style="color: rgb(244, 67, 54); font-family: &quot;Open Sans&quot;;">Please enter a value between 165 and 600.</div>\n\n    <ion-item class="separator-item text-color-gray">\n      <ion-input type="text" placeholder="Your weight 6 months ago" [(ngModel)]="submitData.weightMonth" ></ion-input>\n    </ion-item>\n    <div *ngIf="submitted && (!submitData.weightMonth)" class="gfield_description validation_message" style="color: rgb(244, 67, 54); font-family: &quot;Open Sans&quot;;">This field is required.</div>\n    <div *ngIf="submitted && (submitData.weightMonth<165 || submitData.weightMonth>600)" class="gfield_description validation_message" style="color: rgb(244, 67, 54); font-family: &quot;Open Sans&quot;;">Please enter a value between 165 and 600.</div>\n\n    <ion-item class="separator-item text-color-gray">\n      <ion-label>Your height</ion-label>\n      <ion-select [(ngModel)]="submitData.height" >\n        <ion-option value="5.0">5.0</ion-option>\n        <ion-option value="5.1">5.1</ion-option>\n        <ion-option value="5.2">5.2</ion-option>\n        <ion-option value="5.3">5.3</ion-option>\n      </ion-select>\n    </ion-item>\n     <div *ngIf="submitted && (!submitData.height)" class="gfield_description validation_message" style="color: rgb(244, 67, 54); font-family: &quot;Open Sans&quot;;">This field is required.</div>\n\n    <div class="separator-part text-color-gray">\n      <ion-item class="text-color-gray">\n        <ion-label>No gluten or wheat allergy</ion-label>\n        <ion-checkbox [(ngModel)]="otherInfo.nogluten"></ion-checkbox>\n      </ion-item>\n\n      <ion-item class="text-color-gray">\n        <ion-label>No issue drinking 6 water bottles/day</ion-label>\n        <ion-checkbox [(ngModel)]="otherInfo.noissue"></ion-checkbox>\n      </ion-item>\n\n      <ion-item class="text-color-gray">\n        <ion-label>No kidney issues</ion-label>\n        <ion-checkbox [(ngModel)]="otherInfo.nokidney"></ion-checkbox>\n      </ion-item>\n    </div>\n     <div *ngIf="submitted && isEmpty(otherInfo)" class="gfield_description validation_message" style="color: rgb(244, 67, 54); font-family: &quot;Open Sans&quot;;">This field is required.</div>\n\n  </div>\n\n  <button ion-button (click)="goNext()" style="width:80px; height:80px; border-radius: 50%; float:right; margin-top:30px">Next</button>\n</ion-content>\n\n'/*ion-inline-end:"/Data/gastrickCare/src/pages/second/second.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], SecondPage);

//# sourceMappingURL=second.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map