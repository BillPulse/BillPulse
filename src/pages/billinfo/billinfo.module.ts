import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillinfoPage } from './billinfo';

@NgModule({
  declarations: [
    BillinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BillinfoPage),
  ],
})
export class BillinfoPageModule {}
