import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Patient } from './patient';

import 'rxjs/add/operator/delay';

@Injectable()
export class PatientsService {
  loading: boolean;
  patientsCollection: AngularFirestoreCollection<Patient>;
  patientsObservable: Observable<Patient[]>;
  patients: Patient[];

  constructor (private afs: AngularFirestore) {
    this.loading = true;
    this.patientsCollection = this.afs.collection('users', ref => ref.where('type', '==', 'patient'));
    this.patientsObservable = this.patientsCollection.valueChanges();
    this.patientsObservable
      .subscribe(data => {
        this.loading = true;

        this.patients = data;
        this.loading = false;
        console.log('Data = ' + data);
      })
  }
}













// private patients: Patient[] = [
//   new Patient('Diego Guerrero', 21180620, '../../../assets/profile.JPG'),
//   new Patient('Karina Perez', 21180621, '../../../assets/mujer.JPG')
// ];
