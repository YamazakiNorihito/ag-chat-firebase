import { Component } from '@angular/core';

import {Comment} from './class/comment';
import {User} from './class/user';

const MY_USER: User = new User(1,'大谷翔平')
const YOUR_USER: User = new User(2,'ゲレーロJr')


const COMMENTS: Comment[] = [
  new Comment(MY_USER, 'ホームラン打ちましたか？'),
  new Comment(YOUR_USER, '今日は打ってないです'),
  new Comment(MY_USER, '私、２本打ったので１位になりました')
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag-chat-firebase';

  comments = COMMENTS;
  loginuser = MY_USER;

  comment ='';

  addComment(comment : string):void{
    if(!comment){
        return;
    }

    this.comments.push(new Comment(this.loginuser,comment));
  }

}
