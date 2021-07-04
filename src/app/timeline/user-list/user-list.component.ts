import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userRef$:AngularFireList<User>;

  users$ :Observable<User[]> | null;

  constructor(private db:AngularFireDatabase) {
    this.userRef$ = db.list('/users');

    this.users$ = null;
   }

  ngOnInit(): void {
    this.users$ = this.userRef$.snapshotChanges().pipe(
      map((snapshots:SnapshotAction<User>[]) => {
        return snapshots.map(snapshot => {
          let values = snapshot.payload.val();
          return new User(values!);
        });
      })
    );
  }

}
