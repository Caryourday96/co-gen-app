import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CO2DailyPage } from './co2-daily.page';

const routes: Routes = [
  {
    path: '',
    component: CO2DailyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CO2DailyPage]
})
export class CO2DailyPageModule {}
