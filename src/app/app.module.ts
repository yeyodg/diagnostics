import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core.module';
import { AuthGuard } from './auth.guard';


// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from '../environments/environment';

// Angular material and Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatListModule,
  MatSelectModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientsListComponent } from './patients/patients-list/patients-list.component';
import { PatientDetailsComponent } from './patients/patient-details/patient-details.component';
import { StartComponent } from './patients/start/start.component';
import { HeaderComponent } from './header/header.component';
import { HttpService } from './http.service';
import { PatientsService } from './patients/patients.service';
import { LandingComponent } from './landing/landing.component';
import { Parallax, ParallaxConfig } from 'ngx-parallax';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';



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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    CoreModule,
  ],
  providers: [
    HttpService,
    PatientsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
