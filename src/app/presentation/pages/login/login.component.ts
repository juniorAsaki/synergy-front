import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment.dev';
import {BaseService} from '../../../core/services/base.service';
import {LocalStorageService} from '../../../core/services/local-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  formGroup!: FormGroup;
  loginEndpoint = environment.endPoint;

  constructor(private fb: FormBuilder , private baseService: BaseService , private router: Router , private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: this.fb.control(null , Validators.required),
      password: this.fb.control(null , Validators.required),
      remenber: this.fb.control(false , Validators.required)
    })
  }

  login(){
    this.baseService.create(this.loginEndpoint.login.auth , this.formGroup.value).subscribe({
      next: data => {
        this.localStorage.saveToken(data.id_token);
        this.router.navigateByUrl("/owner/dashboard")
      },
      error: err => {
        console.error(err , "connexion echouée !!");
      }
    })
  }



}
