import { HttpInterceptorFn } from '@angular/common/http';
import {LocalStorageService} from '../services/local-storage.service';
import {inject} from '@angular/core';
import {Router} from '@angular/router';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {

  const localStorage: LocalStorageService = inject(LocalStorageService);
  const router: Router = inject(Router);


  const token = localStorage.getToken(); // Récupérer le token
  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(cloned);
  }
  return next(req);
};
