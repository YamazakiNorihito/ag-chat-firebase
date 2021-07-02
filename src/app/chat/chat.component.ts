import { Component, OnInit } from '@angular/core';

import {Comment} from '../class/comment';
import {User} from '../class/user';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/database';
import { map } from 'rxjs/operators';

const MY_USER: User = new User(1,'大谷翔平')


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  comments$:Observable<Comment[]>;
  commentsRef:AngularFireList<Comment>;

  loginuser = MY_USER;
  comment ='';

  constructor(private db:AngularFireDatabase){
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

  ngOnInit(): void {
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
