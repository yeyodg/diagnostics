import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients/patients.component'
import { PATIENTS_PATHS } from './patients/patients-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patients',
    pathMatch: 'full'
  },
  {
    path: 'patients',
    component: PatientsComponent,
    children: PATIENTS_PATHS
  },
  {
    path: '**',
    redirectTo: 'patients'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
