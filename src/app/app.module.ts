import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';

import { CoreModule } from './core.module';
import { MaterialModule } from './material.module';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';


import { Parallax, ParallaxConfig } from 'ngx-parallax';
import { AgmCoreModule } from '@agm/core';

import { HttpService } from './http.service';
import { PatientsService } from './patients/patients.service';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsListComponent } from './patients/patients-list/patients-list.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { StartComponent } from './patients/start/start.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { DescriptionDialogComponent } from './patients/patient-details/description-dialog.component';
import { LocationService } from './global-services/location.service';



@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientsListComponent,
    PatientDetailsComponent,
    StartComponent,
    HeaderComponent,
    LandingComponent,
    Parallax,
    SigninComponent,
    FooterComponent,
    DescriptionDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMaps.apikey,
      libraries: ["places"]
    })
  ],
  providers: [
    HttpService,
    PatientsService,
    AuthGuard,
    LocationService
  ],
  entryComponents: [
    DescriptionDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
