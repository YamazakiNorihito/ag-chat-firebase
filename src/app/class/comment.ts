import { User } from './user';

export class Comment {
  user : User;
  message : string;
  date:number;


  constructor(user: User, message: string) {
    this.user = user;
    this.message = message;
    this.date = Date.now();
  }
}
