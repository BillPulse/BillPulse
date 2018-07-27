webpackJsonp([12],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		271,
		7
	],
	"../pages/billinfo/billinfo.module": [
		272,
		11
	],
	"../pages/bills/bills.module": [
		273,
		6
	],
	"../pages/following/following.module": [
		274,
		10
	],
	"../pages/history/history.module": [
		275,
		5
	],
	"../pages/home/home.module": [
		276,
		4
	],
	"../pages/menu/menu.module": [
		277,
		3
	],
	"../pages/profile/profile.module": [
		278,
		2
	],
	"../pages/settings/settings.module": [
		279,
		1
	],
	"../pages/tabs/tabs.module": [
		280,
		0
	],
	"../pages/whatisabill/whatisabill.module": [
		281,
		9
	],
	"../pages/youractivity/youractivity.module": [
		282,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the BillinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BillinfoPage = /** @class */ (function () {
    function BillinfoPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.billName = navParams.get('data');
        this.readClicked = false;
        this.followButton = "FOLLOW";
        this.followindicate = false;
    }
    BillinfoPage.prototype.onReadClick = function () {
        this.readClicked = !this.readClicked;
        var alert = this.alertCtrl.create({
            title: 'Read More',
            subTitle: 'This will provide additional information about the bill',
            buttons: ['OK']
        });
        alert.present();
    };
    BillinfoPage.prototype.followClicked = function () {
        if (this.followindicate) {
            this.followButton = "FOLLOW";
        }
        else {
            this.followButton = "FOLLOWED";
        }
        this.followindicate = !this.followindicate;
    };
    BillinfoPage.prototype.showRadio = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    BillinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BillinfoPage');
    };
    BillinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-billinfo',template:/*ion-inline-start:"C:\Users\almond\Desktop\fullNav\src\pages\billinfo\billinfo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mental Health Bill\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div class="banner">\n		<img src="assets/imgs/mh-green.jpg" class="bannerimage"/>\n	</div>\n\n	<div class="bannertext">\n		<p><strong>MENTAL HEALTH ACT OF 2017</strong></p>\n	</div>\n	<ion-grid>\n		<!-- <ion-row class="billtitle" >\n			<ion-col text-center no-padding>\n			<p>{{billName}}</p>\n			\n		</ion-col> -->\n		<!-- </ion-row> -->\n		<ion-row padding>\n			<ion-col col-6 offset-2>\n				<p><strong> LONG TITLE: </strong></p>\n				<p> An Act Establishing a National Mental Health Policy for the Purpose of Enhancing the Delivery of Integrated Mental Health Services, Promoting and Protecting the Rights of Persons Utilizing Psychiatric, Neurologic and Psychosocial Health Services, Appropriating Funds Therefor, and for Other Purposes</p>\n\n				<br/>\n\n				<p><strong>GENERAL INFORMATION: </strong> </p>\n\n				<p> This section will provide a brief and understandable description of the bill. It intends to give a layman\'s description of the bill especially for those who find it difficult to comprehend different political terms and concepts. </p>\n				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n				<br/>\n\n				<button ion-button full color="main-blue" (click)="onReadClick()">READ MORE</button>\n\n				<!-- <p *ngIf="readClicked">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->\n			</ion-col>\n\n			<ion-col offset-1>\n				<p><strong>Status</strong></p>\n\n				<div class="statusbox">\n					<img src="assets/imgs/status2.png">\n				</div>\n\n				<br/>\n\n				<button ion-button round color="light" class="pulse" (click)="followClicked()">{{followButton}}</button>\n\n				<br/>\n				<br/>\n				<button ion-button round color="danger" class="pulse" (click)="showRadio()" >PULSE</button>\n\n\n				\n			</ion-col>\n		</ion-row>\n		\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\almond\Desktop\fullNav\src\pages\billinfo\billinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BillinfoPage);
    return BillinfoPage;
}());

//# sourceMappingURL=billinfo.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the FollowingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FollowingPage = /** @class */ (function () {
    function FollowingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FollowingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FollowingPage');
    };
    FollowingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-following',template:/*ion-inline-start:"C:\Users\almond\Desktop\fullNav\src\pages\following\following.html"*/'<!--\n  Generated template for the FollowingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <ion-icon name="arrow-round-forward"></ion-icon>\n    </ion-avatar>\n    <h2><strong>BILL 1</strong> advances to SECOND READING</h2><span> - May 1, 2018 </span>\n  </ion-item> \n\n   <ion-item>\n   <ion-avatar item-start>\n      <ion-icon name="checkbox"></ion-icon>\n    </ion-avatar>\n    <h2><strong>BILL 2</strong> Conference Committee Report APPROVED by the Senate</h2><span> - April 15, 2018 </span>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <ion-icon name="arrow-round-forward"></ion-icon>\n    </ion-avatar>\n    <h2><strong>BILL 2</strong> is SENT to the HOUSE OF REPRESENTATIVES</h2><span> - March 20, 2018 </span>\n  </ion-item>\n\n   <ion-item>\n    <ion-avatar item-start>\n      <ion-icon name="checkbox"></ion-icon>\n    </ion-avatar>\n    <h2><strong>BILL 2</strong> is APPROVED on THIRD READING</h2><span> - March 3, 2018 </span>\n  </ion-item>\n\n  <ion-item>\n   <ion-avatar item-start>\n      <ion-icon name="ribbon"></ion-icon>\n    </ion-avatar>\n    <h2><strong>BILL 3</strong> is APPROVED and SIGNED into law</h2><span> - January 3, 2018 </span>\n  </ion-item>\n\n  \n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\almond\Desktop\fullNav\src\pages\following\following.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FollowingPage);
    return FollowingPage;
}());

//# sourceMappingURL=following.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YouractivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the YouractivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YouractivityPage = /** @class */ (function () {
    function YouractivityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            'You rated 5 stars for Bill 1',
            'You reviewed Bill 1',
            'You added Bill 2 to your Followed Bills',
            'You added Bill 3 to your Followed Bills',
            'You rated 3 stars for Bill 3',
        ];
    }
    YouractivityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YouractivityPage');
    };
    YouractivityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-youractivity',template:/*ion-inline-start:"C:\Users\almond\Desktop\fullNav\src\pages\youractivity\youractivity.html"*/'<!--\n  Generated template for the YouractivityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item>\n    <ion-avatar item-start>\n      <ion-icon name="star"></ion-icon>\n    </ion-avatar>\n    <h2>You rated 5 stars for Bill 1</h2>\n  </ion-item> \n\n   <ion-item>\n    <ion-avatar item-start>\n      <ion-icon name="paper"></ion-icon>\n    </ion-avatar>\n    <h2>You reviewed Bill 1</h2>\n  </ion-item>\n\n  <ion-item>\n   <ion-avatar item-start>\n      <ion-icon name="bookmark"></ion-icon>\n    </ion-avatar>\n    <h2>You added Bill 2 to Your Followed Bills</h2>\n  </ion-item>\n\n  <ion-item>\n   <ion-avatar item-start>\n      <ion-icon name="bookmark"></ion-icon>\n    </ion-avatar>\n    <h2>You added Bill 3 to Your Followed Bills</h2>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <ion-icon name="paper"></ion-icon>\n    </ion-avatar>\n    <h2>You reviewed Bill 3</h2>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\almond\Desktop\fullNav\src\pages\youractivity\youractivity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], YouractivityPage);
    return YouractivityPage;
}());

//# sourceMappingURL=youractivity.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatisabillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the WhatisabillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhatisabillPage = /** @class */ (function () {
    function WhatisabillPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WhatisabillPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhatisabillPage');
    };
    WhatisabillPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-whatisabill',template:/*ion-inline-start:"C:\Users\almond\Desktop\fullNav\src\pages\whatisabill\whatisabill.html"*/'<!--\n  Generated template for the WhatisabillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>What is a Bill?</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-grid>\n		<ion-row>\n			<ion-col offset-1 col-10>\n	<p> The job of a Senator or a Representative is to make laws that uphold the spirit of the constitution. They can also amend or change the constitution itself. Senators and Representatives work on two documents: bills and resolutions.</p>\n\n	<p>A resolution conveys principles and sentiments of the Senate or the HOR. A bill, on the other hand, is a law in the making. These are the “proposed laws” or “proposed amendment” you hear about in the news, like House Bill No. 2379, which seeks to amend the National Internal Revenue Code of 1997, the country’s 20-year-old tax code. House Bills are those made by a Representative, while Senate Bills are those made by a Senator.</p>\n\n	<p><i>This is a temporary content from http://primer.com.ph/tips-guides/2016/10/02/introduction-to-the-philippine-legislative-process/ </i></p>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\almond\Desktop\fullNav\src\pages\whatisabill\whatisabill.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], WhatisabillPage);
    return WhatisabillPage;
}());

//# sourceMappingURL=whatisabill.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_billinfo_billinfo__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_following_following__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_youractivity_youractivity__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_whatisabill_whatisabill__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_billinfo_billinfo__["a" /* BillinfoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_following_following__["a" /* FollowingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_youractivity_youractivity__["a" /* YouractivityPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_whatisabill_whatisabill__["a" /* WhatisabillPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/billinfo/billinfo.module#BillinfoPageModule', name: 'BillinfoPage', segment: 'billinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bills/bills.module#BillsPageModule', name: 'BillsPage', segment: 'bills', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/following/following.module#FollowingPageModule', name: 'FollowingPage', segment: 'following', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whatisabill/whatisabill.module#WhatisabillPageModule', name: 'WhatisabillPage', segment: 'whatisabill', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/youractivity/youractivity.module#YouractivityPageModule', name: 'YouractivityPage', segment: 'youractivity', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_billinfo_billinfo__["a" /* BillinfoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_following_following__["a" /* FollowingPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_youractivity_youractivity__["a" /* YouractivityPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_whatisabill_whatisabill__["a" /* WhatisabillPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'MenuPage';
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\almond\Desktop\fullNav\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\almond\Desktop\fullNav\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map