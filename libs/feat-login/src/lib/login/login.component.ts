import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "@bg-hoard/shared/auth/auth.service";

@Component({
  selector: 'bg-hoard-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    const loggedIn = this.authService.login({username, password});
    if (loggedIn) {
      this.router.navigateByUrl('/');
    }
  }
}
