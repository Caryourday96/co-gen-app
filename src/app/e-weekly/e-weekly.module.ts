import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EWeeklyPage } from './e-weekly.page';

const routes: Routes = [
  {
    path: '',
    component: EWeeklyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EWeeklyPage]
})
export class EWeeklyPageModule {}
