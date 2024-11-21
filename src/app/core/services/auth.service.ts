import { Injectable } from '@angular/core';
import { LocalStorageService} from './local-storage.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment.dev';
import {map, Observable} from 'rxjs';
import {AuthResponse, jwtPlayload} from '../../domaine/interfaces/user.interface';
import {jwtDecode, JwtPayload} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  id_token!: string | null;
  private baseUrl: string = environment.baseUrl;

  AuthenticateSate =  {
    userID:0,
    email: "",
    isAuthenticated: false,
    roles: ""
  }


  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private httpClient: HttpClient
  ) {

    this.loadProfil();
  }


  isAuthenticated(): boolean{
    return !!this.localStorageService.getToken();
  }


  login(endPoint: string , data: any ): Observable<any>{
    const url =  `${this.baseUrl}/${endPoint}`;
    return this.httpClient.post<AuthResponse>(url , data);
  }

  logout(){
    this.localStorageService.removeToken();
    this.router.navigateByUrl("/login");
  }


  loadProfil() {
    this.id_token = this.localStorageService.getToken();

    if (this.id_token != null) {
      let decodeJwt: jwtPlayload = jwtDecode(this.id_token);

      this.AuthenticateSate.userID = decodeJwt.id;
      this.AuthenticateSate.isAuthenticated = this.isAuthenticated();
      this.AuthenticateSate.email = decodeJwt.sub;
      this.AuthenticateSate.roles = decodeJwt.auth;

    }

    console.log(this.AuthenticateSate);
  }
}
