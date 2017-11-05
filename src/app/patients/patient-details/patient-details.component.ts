import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { PatientsService } from '../patients.service';
import { Patient } from '../patient';

@Component({
  selector: 'dg-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private patient: Patient;
  constructor(
    private patientService: PatientsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.patient = this.patientService.getPatient(params.id);
      }
    );
  }
  ngOnDestroy () {
    this.subscription.unsubscribe();
  }

}
