import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService,
    private router :Router) { }

  ngOnInit(): void {
  }

  login(form:NgForm):void{
    let {email, password} = form.value;

    this.authservice.login(email,password)
        .then(()=> this.router.navigateByUrl('/'));
  }

}
