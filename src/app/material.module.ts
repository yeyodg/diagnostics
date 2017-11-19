import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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
  MatProgressSpinnerModule,
  MatDialogModule,
  MatInputModule,
  MatSidenavModule
}                           from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule    
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule    
  ],
  declarations: []
})
export class MaterialModule { }
