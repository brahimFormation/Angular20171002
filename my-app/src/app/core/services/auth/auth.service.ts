import { Injectable } from '@angular/core';
import  * as firebase  from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '@app/core/interfaces/user.model';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class AuthService {

  user: Observable<User>;

  constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = this.afAuth.authState
       .switchMap(user => {
         if (user) {
           return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
         } else {
           return Observable.of(null);
         }
       });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      })
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName,
    }
    return userRef.set(data);
  }

  signOut() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/']);
      })
  }
}
