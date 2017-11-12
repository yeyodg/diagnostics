import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { Observable } from 'rxjs/Observable';

import { PatientsService } from '../patients.service';

@Component({
  selector: 'dg-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
  patients: Observable<Patient[]>;
  // patients2: Patient[];

  constructor (private patientsService: PatientsService) { }

  ngOnInit() {
    console.log(this.patientsService.patients);
  }
}
