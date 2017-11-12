import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { PatientsComponent } from './patients/patients.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { PATIENTS_PATHS } from './patients/patients-routing.module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent,

  },
  {
    path: 'patients',
    component: PatientsComponent,
    children: PATIENTS_PATHS,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
