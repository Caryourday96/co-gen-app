import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Co2WeeklyPage } from './co2-weekly.page';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const routes: Routes = [
  {
    path: '',
    component: Co2WeeklyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Co2WeeklyPage]
})
export class Co2WeeklyPageModule {}
