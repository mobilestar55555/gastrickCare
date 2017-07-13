webpackJsonp([0],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__third__ = __webpack_require__(266);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPageModule", function() { return ThirdPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThirdPageModule = (function () {
    function ThirdPageModule() {
    }
    return ThirdPageModule;
}());
ThirdPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__third__["a" /* ThirdPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__third__["a" /* ThirdPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__third__["a" /* ThirdPage */]
        ]
    })
], ThirdPageModule);

//# sourceMappingURL=third.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdPage; });
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
 * Generated class for the ThirdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ThirdPage = (function () {
    function ThirdPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.genderInfo = navParams.get('genderInfo');
        this.submitData = navParams.get('submitData');
        console.log(this.submitData);
        this.otherInfo = navParams.get('otherInfo');
    }
    ThirdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThirdPage');
    };
    ThirdPage.prototype.goNext = function () {
    };
    ThirdPage.prototype.goPrev = function () {
        this.navCtrl.pop();
    };
    return ThirdPage;
}());
ThirdPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-third',template:/*ion-inline-start:"/Data/gastrickCare/src/pages/third/third.html"*/'<!--\n  Generated template for the ThirdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <!--ion-navbar>\n    <ion-title>\n      Gastric Bypass Alternative\n    </ion-title>\n  </ion-navbar-->\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <img src="assets/images/navigate.png" class="navigator">\n  </div>\n  <h4>Intermediate results</h4>\n  <ion-grid>\n    <ion-row style="text-align:center; color:gray">\n      <ion-col col-4></ion-col>\n      <ion-col col-4 ><div style="background: #b3e3df; padding:2px">You</div></ion-col>\n      <ion-col col-4 ><div style="background: #b3e3df; padding:2px">Healthy</div></ion-col>\n    </ion-row>\n    <ion-row style="background: aliceblue; margin-top:5px; color:gray">\n      <ion-col col-4>Weight lbs</ion-col>\n      <ion-col col-4>{{submitData.weight}}</ion-col>\n      <ion-col col-4>{{submitData.height}}</ion-col>\n    </ion-row>\n    <ion-row style="background: aliceblue; margin-top:5px; color:gray">\n      <ion-col col-4>BMI</ion-col>\n      <ion-col col-4>91.4</ion-col>\n      <ion-col col-4>23</ion-col>\n    </ion-row>\n    <ion-row style="margin-top:5px; color:gray">\n      <ion-col col-4>Weight to lose</ion-col>\n      <ion-col col-8 style="background: #f10000; color:white; text-align:center"><span style="font-size:25px">359</span> <span style="font-size:14px">lbs</span></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h4 style="margin-top:40px">Continue...</h4>\n  <h3 style="margin-top:40px">Why am I overweight?</h3>\n  <h5 style="color:gray">Select all that applies</h5>\n\n  <div>\n    <ion-item class="text-color-gray">\n      <ion-label>Eating when stressed</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n\n    <ion-item class="text-color-gray">\n      <ion-label>Emotional eating</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n\n    <ion-item class="text-color-gray">\n      <ion-label>Medication</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n\n    <ion-item class="text-color-gray">\n      <ion-label>Night eating</ion-label>\n      <ion-checkbox></ion-checkbox>\n    </ion-item>\n    <ion-item class="text-color-gray">\n      <p>...</p>\n    </ion-item>\n  </div>\n\n  <button ion-button (click)="goNext()" style="width:80px; height:80px; border-radius: 50%; float:right; margin-top:30px">Next</button>\n  <button ion-button (click)="goPrev()" style="width:80px; height:80px; border-radius: 50%; float:left; margin-top:30px">Prev</button>\n\n</ion-content>\n\n'/*ion-inline-end:"/Data/gastrickCare/src/pages/third/third.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ThirdPage);

//# sourceMappingURL=third.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map