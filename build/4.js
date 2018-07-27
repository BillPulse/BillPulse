webpackJsonp([4],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billinfo_billinfo__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__whatisabill_whatisabill__ = __webpack_require__(196);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.itemSelected = function (item) {
        this.item = item;
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__billinfo_billinfo__["a" /* BillinfoPage */], {
            data: item
        });
    };
    HomePage.prototype.billSelected = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__whatisabill_whatisabill__["a" /* WhatisabillPage */], {});
    };
    HomePage.prototype.featureDevelopment = function () {
        var alert = this.alertCtrl.create({
            title: 'IN DEVELOPMENT',
            subTitle: 'This feature is currently in development. The creators can provide information of what to expect',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\almond\Desktop\fullNav\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-3 padding>\n          <div class="logo-container">\n            <img src="assets/imgs/bplogogreenwhite.png">\n          </div>\n        </ion-col>\n\n         <ion-col col-6 col-s-5 col-md-5 padding>\n            <ion-searchbar\n              [(ngModel)]="myInput"\n              [showCancelButton]="shouldShowCancel"\n              (ionInput)="onInput($event)"\n              (ionCancel)="onCancel($event)">\n            </ion-searchbar>\n        </ion-col>\n\n        <ion-col padding>\n          <button ion-button float-right menuToggle>\n          <ion-icon class="menu-icon" name="menu"></ion-icon>\n        </button>\n  </ion-col>\n</ion-row>\n\n    </ion-grid> \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class = "masters">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 col-sm>\n        <ion-card class="card-background-image" (click) = "billSelected(\'Question\')">\n          <img src="assets/imgs/question.jpg"/>\n          <div class = "card-title">What Is A Bill?</div>\n          <div class = "card-subtitle">Information about a legislative bill</div>\n        </ion-card>\n\n        <ion-card class="card-background-image" (click) = "featureDevelopment()">\n          <img src="assets/imgs/news.jpg"/>\n          <div class = "card-title">News</div>\n          <div class = "card-subtitle">Government news and updates</div>\n        </ion-card>\n\n     \n\n      </ion-col>\n\n      <ion-col col-6 col-sm>\n      \n\n        <ion-card class="card-background-image" (click) = "featureDevelopment()">\n          <img src="assets/imgs/discover.jpg"/>\n          <div class = "card-title">Discover</div>\n          <div class = "card-subtitle">Find out about more bills</div>\n        </ion-card>\n\n\n\n        <ion-card class="card-background-image" (click) = "featureDevelopment()">\n          <img src="assets/imgs/notebook.jpg"/>\n          <div class = "card-title">Featured Reviews</div>\n          <div class = "card-subtitle">Read featured reviews of other bills</div>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-6 col-sm>\n\n        <ion-card class="card-background-image" (click) = "itemSelected(\'Mental Health\')">\n          <img src="assets/imgs/mhicon.jpg"/>\n          <div class = "card-title">The Mental Health Bill</div>\n          <div class = "card-subtitle">Click to read more</div>\n        </ion-card>\n\n        <ion-card class="card-background-image" (click) = "featureDevelopment()">\n          <img src="assets/imgs/hearing.jpg"/>\n          <div class = "card-title">Committee Hearings</div>\n          <div class = "card-subtitle">Read about Chihiro </div>\n        </ion-card>\n\n        \n      </ion-col>\n\n      <ion-col col-6 col-sm>\n\n\n         <ion-card class="card-background-image" (click) = "featureDevelopment()">\n          <img src="assets/imgs/billsyoufollow.png"/>\n          <div class = "card-title">Your Followed Bills</div>\n          <div class = "card-subtitle">Check out your current followed bills</div>\n        </ion-card>\n\n        \n        <ion-card class="card-background-image" (click) = "featureDevelopment()">\n          <img src="assets/imgs/socmed.png"/>\n          <div class = "card-title">Follow Us!</div>\n          <div class = "card-subtitle">Visit our other social media pages.</div>\n        </ion-card>\n\n      </ion-col>\n\n\n      \n\n    </ion-row>    \n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\almond\Desktop\fullNav\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.js.map