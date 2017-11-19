import { Component, OnInit, NgZone } from '@angular/core';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'dg-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  latitude: number = 51.678418;
  longitude: number = 7.809007;
  zoom: number = 4;
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.setCurrentPosition();
    // this.mapsAPILoader.load().then(() => {
    //   let autocomplete = new google.maps.places.Places
    // // this.mapsAPILoader.load().then(() => {
    // //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    // //     types: ["address"]
    // //   });
    //   // autocomplete.addListener("place_changed", () => {
    //   //   this.ngZone.run(() => {
    //   //     //get the place result
    //   //     let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //   //
    //   //     //verify result
    //   //     if (place.geometry === undefined || place.geometry === null) {
    //   //       return;
    //   //     }
    //   //
    //   //     //set latitude, longitude and zoom
    //   //     this.latitude = place.geometry.location.lat();
    //   //     this.longitude = place.geometry.location.lng();
    //   //     this.zoom = 12;
    //   //   });
    //   // });
    // });
  }

  private setCurrentPosition() {

    if (('geolocation' in navigator)) {
     navigator.geolocation.getCurrentPosition((position) => {
       this.longitude = position.coords.latitude;
       this.longitude = position.coords.longitude;
       this.zoom = 15;
     });
   }
 }

}
