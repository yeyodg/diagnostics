import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';

import { PatientsService } from '../patients.service';
import { Patient } from '../patient';

@Component({
  selector: 'dg-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit, OnDestroy {
  private subscriptionRoute: Subscription;
  private subscriptionPatient: Subscription;
  private patients: Patient[] = [];
  private patient: Patient;

  constructor(
    private patientService: PatientsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscriptionRoute = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.patient = this.patientService.patients[params.id]
      }
    );
  }
  ngOnDestroy () {
    this.subscriptionRoute.unsubscribe();
  }

  onEdit () {

  }

}
