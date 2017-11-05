import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular material and Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatListModule
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

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientsListComponent,
    PatientDetailsComponent,
    StartComponent,
    HeaderComponent,
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
    MatListModule
  ],
  providers: [HttpService, PatientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
