import { Component, OnInit } from '@angular/core';
import { LocationService } from '../global-services/location.service';

@Component({
  selector: 'dg-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.locationService.setCurrentPosition();
  }

}
