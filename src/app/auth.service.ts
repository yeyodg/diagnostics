import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  type?: string;
}

@Injectable()
export class AuthService {
  user: Observable<User>;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

  googleLogin () {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider, null);
  }

  googleSignup (type) {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider, type);
  }


  private oAuthLogin (provider, type) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then(credential => {
      console.log(credential);
      if (type) {
        this.updateUserData(credential.user, type);
      }
    });
  }

  private updateUserData (user, type) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    if (type) {
      data.type = type;
    }
    console.log(data);
    return userRef.set(data);
  }

  signOut () {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    })
  }

}
