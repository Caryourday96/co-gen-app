import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Co2MonthlyPage } from './co2-monthly.page';

const routes: Routes = [
  {
    path: '',
    component: Co2MonthlyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Co2MonthlyPage]
})
export class Co2MonthlyPageModule {}
