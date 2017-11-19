import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/Rx';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


import { PatientsService } from '../patients.service';
import { Patient } from '../patient';
import { DescriptionDialogComponent } from './description-dialog.component';

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
  latitude: number = 10.48;
  longitude: number = -66.9;
  zoom: number = 4;
  public description: string = 'Desde patients';

  constructor(
    private patientService: PatientsService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
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

  openDialog(): void {
    let dialogRef = this.dialog.open(DescriptionDialogComponent, {
      width: '600px',
      data: { description: this.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ' + result);
      this.description = result;
    });
  }
}
