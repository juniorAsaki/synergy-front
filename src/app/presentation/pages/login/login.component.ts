import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment.dev';
import {BaseService} from '../../../core/services/base.service';
import {LocalStorageService} from '../../../core/services/local-storage.service';
import {AuthService} from '../../../core/services/auth.service';
import {AuthResponse} from '../../../domaine/interfaces/user.interface';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    ToastModule,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  formGroup!: FormGroup;
  loginEndpoint = environment.endPoint;
  error = false;

  constructor(private ms: MessageService , private fb: FormBuilder , private authService: AuthService , private router: Router , private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: this.fb.control(null , Validators.required),
      password: this.fb.control(null , Validators.required),
      remenber: this.fb.control(false , Validators.required)
    })
  }

  login(){
    this.authService.login(this.loginEndpoint.login.auth , this.formGroup.value).subscribe({
      next: (data: AuthResponse) => {
        this.ms.add({ severity: 'success', summary: 'success', detail: 'Connexion réussie avec succès' , life: 3000});
        this.localStorage.saveToken(data.id_token);
        this.authService.loadProfil();

        if(this.authService.AuthenticateSate.roles == "OWNER"){
          this.router.navigateByUrl("/owner")
        }else if(this.authService.AuthenticateSate.roles == "CUSTOMER"){
          this.router.navigateByUrl("/customer")
        }else if(this.authService.AuthenticateSate.roles == "ADMIN"){
          this.router.navigateByUrl("/admin")
        }
      },
      error: err => {
        this.error = true;
        this.ms.add({ severity: 'error', summary: 'error', detail: 'Email et/ou mot de passe incorrect(s).' , life: 3000});
        console.error(err , "connexion echouée !!");
      }
    })
  }



}
