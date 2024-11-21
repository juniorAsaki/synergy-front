import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPageGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      // Redirige l'utilisateur connecté vers une autre page
      this.router.navigateByUrl('/login'); // Changez '/home' par la route de votre choix
      return false; // Bloque l'accès à la page de connexion
    }
    return true; // Permet l'accès pour les utilisateurs non connectés
  }
}
