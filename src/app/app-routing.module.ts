import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',
    
  },
  {
    path: 'carbon',
    loadChildren: './carbon/carbon.module#CarbonPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'electricity',
    loadChildren: './electricity/electricity.module#ElectricityPageModule',
    canActivate: [AuthGuard]
  },

  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },

  {
    path: 'signup',
    loadChildren: './signup/signup.module#SignupPageModule'
  },
  {
    path: 'e-daily',
    loadChildren: './e-daily/e-daily.module#EDailyPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'e-weekly',
    loadChildren: './e-weekly/e-weekly.module#EWeeklyPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutPageModule'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
