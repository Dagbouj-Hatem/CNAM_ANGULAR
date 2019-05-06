import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from 'app/login/login.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate  {

  // This service will activate a particular route only if the user is logged in.
  constructor(private router: Router,
    private loginService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }
}
