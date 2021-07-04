import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/class/user';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user$ : Observable<User|null>;

  constructor(
    private route:ActivatedRoute,
    private db:AngularFireDatabase,
    private location:Location
  ) {
    this.user$  = new Observable<null>();
   }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.user$ = this.db.object<User>(`/users/${id}`).valueChanges();
  }

  goBack(event:MouseEvent) :void{
    event.preventDefault();
    this.location.back();
  }

}
