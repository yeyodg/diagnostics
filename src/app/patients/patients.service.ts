import { Injectable } from '@angular/core';

import { Patient } from './patient';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [
    new Patient('Diego Guerrero', 21180620, '../../../assets/profile.JPG'),
    new Patient('Karina Perez', 21180621, '../../../assets/mujer.JPG')
  ];

  constructor() { }

  getPatients () {
    return this.patients;
  }
  getPatient (index: number) {
    return this.patients[index];
  }
}
