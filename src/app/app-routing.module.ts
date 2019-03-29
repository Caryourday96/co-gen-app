import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'carbon', 
  loadChildren: './carbon/carbon.module#CarbonPageModule' 
  },
  { 
    path: 'electricity', 
  loadChildren: './electricity/electricity.module#ElectricityPageModule' 
  },

  { 
    path: 'login', 
  loadChildren: './login/login.module#LoginPageModule' 
  },

  { 
    path: 'signup', 
    loadChildren: './signup/signup.module#SignupPageModule' 
  },
  { path: 'e-daily',
   loadChildren: './e-daily/e-daily.module#EDailyPageModule' },


  { path: 'e-weekly', 
  loadChildren: './e-weekly/e-weekly.module#EWeeklyPageModule' },  { path: 'co2-daily', loadChildren: './co2-daily/co2-daily.module#CO2DailyPageModule' },
  { path: 'co2-weekly', loadChildren: './co2-weekly/co2-weekly.module#CO2WeeklyPageModule' },
  { path: 'co2-monthly', loadChildren: './co2-monthly/co2-monthly.module#Co2MonthlyPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
