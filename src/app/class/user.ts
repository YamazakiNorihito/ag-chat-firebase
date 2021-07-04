import firebase from 'firebase/app';

export class User {

  displayName:string|null;
  email:string|null;
  photoURL : string|null;
  inital : string;
  uid:string;

  constructor(user:User |firebase.User) {
      this.uid = user.uid;
      this.displayName = user.displayName;
      this.email = user.email;
      this.photoURL = user.photoURL;
      if(user.displayName!)
      {
        this.inital = user.displayName.slice(0,1);
      }else
      {
        this.inital = "";
      }
  }
}
