import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { EMonthlyPage } from './e-monthly.page';

const routes: Routes = [
  {
    path: '',
    component: EMonthlyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EMonthlyPage]
})
export class EMonthlyPageModule {}
