import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CO2WeeklyPage } from './co2-weekly.page';

const routes: Routes = [
  {
    path: '',
    component: CO2WeeklyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CO2WeeklyPage]
})
export class CO2WeeklyPageModule {}
