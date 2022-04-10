import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable, map, tap} from 'rxjs';

import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.activeUser.pipe(
      map((activeUser) => Boolean(activeUser)),
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigateByUrl('login');
        }
      })
    );
  }
}
