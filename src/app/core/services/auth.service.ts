import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  create(email: string, password: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
                      .then((credential) => {
                        let {user} = credential;
                        let actionCodeSetting = {
                          url: 'http://localhost:4200/?newAccount=true&emial=' + email
                        };
                        credential.user!.sendEmailVerification(actionCodeSetting);
                      });
  }

  login(email:string,password:string):Promise<firebase.auth.UserCredential | void>{
    return this.afAuth.signInWithEmailAndPassword(email,password)
    .catch(error => console.error(error));
  }


  logout():Promise<void>{
    return this.afAuth.signOut();
  }

}
