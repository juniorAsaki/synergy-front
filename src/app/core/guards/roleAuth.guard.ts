import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private as:AuthService,private router : Router) {}

  canActivate(): boolean {
    if (this.as.AuthenticateSate.roles == "OWNER") {
      return true;
    } else  if (this.as.AuthenticateSate.roles == "CUSTOMER") {
      return true;
    } else  if (this.as.AuthenticateSate.roles == "ADMIN") {
      return true;
    } else {
      this.router.navigateByUrl("/home");
      return false;
    }
  }
}
