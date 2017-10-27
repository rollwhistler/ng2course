import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public ls: LoginService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    this.ls.setLogged(true);
    this.router.navigate(['/']);
  }
  logout() {
    this.ls.setLogged(false);
    
    this.router.navigate(['/']);
  }
}
