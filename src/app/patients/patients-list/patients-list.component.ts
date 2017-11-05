import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';

import { PatientsService } from '../patients.service';

@Component({
  selector: 'dg-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
  patients: Patient[] = [];
  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.patients = this.patientsService.getPatients();
  }

}
