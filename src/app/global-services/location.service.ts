import { Injectable, OnInit, NgZone  } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Injectable()
export class LocationService {
  public latitude: number = 10.48;
  public longitude: number = -66.9;
  public zoom: number = 10;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  public setCurrentPosition() {
    if (('geolocation' in navigator)) {
     navigator.geolocation.getCurrentPosition((position) => {
       this.zoom = 15;
       console.log(this.zoom);
       this.latitude = position.coords.latitude;
       this.longitude = position.coords.longitude;
       console.log('Latitude');
       console.log(position.coords.latitude);
       console.log('Longitude');
       console.log(position.coords.longitude);
     });
   }
 }

}
