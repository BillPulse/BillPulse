import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { BillinfoPage } from '../pages/billinfo/billinfo';
import { FollowingPage } from '../pages/following/following';
import { YouractivityPage } from '../pages/youractivity/youractivity';
import { WhatisabillPage } from '../pages/whatisabill/whatisabill';


@NgModule({
  declarations: [
    MyApp,
    BillinfoPage,
    FollowingPage,
    YouractivityPage,
    WhatisabillPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BillinfoPage,
    FollowingPage,
    YouractivityPage,
    WhatisabillPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
