import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


export const PATIENTS_PATHS = [
  {
    path: '',
    component: StartComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: PatientDetailsComponent,
  }
]
