import { Component } from '@angular/core';

import {Comment} from './class/comment';
import {User} from './class/user';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/database';
import { map } from 'rxjs/operators';

const MY_USER: User = new User(1,'大谷翔平')
const YOUR_USER: User = new User(2,'ゲレーロJr')

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag-chat-firebase';


  comments$:Observable<Comment[]>;
  commentsRef:AngularFireList<Comment>;

  loginuser = MY_USER;
  comment ='';

  item$ : Observable<any> | undefined;

  constructor(private db:AngularFireDatabase){
    this.item$ = db.object('/item').valueChanges();
    this.commentsRef = db.list('/comments');
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

}
