import { Component, OnInit } from '@angular/core';
import { PatientsService } from './patients.service';

@Component({
  selector: 'dg-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.patientsService.getPatients();
  }

}
