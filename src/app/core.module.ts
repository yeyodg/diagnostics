import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
