import { Component, OnInit } from '@angular/core';

import {Comment} from '../class/comment';
import { User } from '../class/user';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  comments$:Observable<Comment[]>|undefined;
  commentsRef:AngularFireList<Comment>;

  loginuser?:User;
  loginuser$:Observable<User|null>;

  comment ='';

  constructor(private afAuth:AngularFireAuth,
              private db:AngularFireDatabase
              ){
    this.commentsRef = db.list('/comments');
    this.loginuser$ = new Observable<null>();
  }

  ngOnInit(): void {

    this.loginuser$ = this.afAuth.authState.pipe(
      map((user:firebase.User| null)=> {
        if(user){
          this.loginuser = new User(user);
          return this.loginuser;
        }
        return null;
      })
    );

    this.comments$ = this.commentsRef.snapshotChanges()
    .pipe(
      map((snapshots:SnapshotAction<Comment>[])=>{
        return snapshots.map(snapshot => {
          let value = snapshot.payload.val();
          return new Comment({key:snapshot.payload.key, ...value});
        })
      })
    );
  }


  addComment(comment : string):void{
    if(!comment){
        return;
    }

    this.commentsRef.push(new Comment({user :this.loginuser, message:comment}))
  }

  updateComment(comment:Comment):void{
    let {key,message} = comment;

    this.commentsRef.update( key! ,{message});
  }

  deleteComment(comment:Comment):void{
    this.commentsRef.remove(comment.key);
  }
}
