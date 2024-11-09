import {Component, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {BaseService} from '../../../core/services/base.service';
import {environment} from '../../../../environments/environment.dev';

@Component({
  selector: 'app-reset-password-1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './reset-password-1.component.html',
  styleUrl: './reset-password-1.component.scss'
})
export class ResetPassword1Component implements OnInit{

  enterNewPassword = signal<boolean>(false);

  formResetPassword!: FormGroup;

  constructor(private fb: FormBuilder , private baseService: BaseService , private router: Router) {
  }



  ngOnInit(): void {
    this.formResetPassword = this.fb.group({
      email: this.fb.control(null , Validators.required),
      otpCode: this.fb.control(null , Validators.required),
      newPassword: this.fb.control(null , Validators.required),
      confirmPassword: this.fb.control(null , Validators.required),
    })
  }

  sendEmail(){

    console.log(this.enterNewPassword())


    const email = {
      email: this.formResetPassword.value.email
    }

    console.log(email);
    this.baseService.ResetEmail(environment.endPoint.register.sendOtpOfEmail , email).subscribe({
      next: data => {
        this.enterNewPassword.set(true);
        console.log(this.enterNewPassword())
      }, error: err => {
        console.error(err);
      }
    })
  }

  validatePassword() {
    const requestPassword = {
      email: this.formResetPassword.value.email,
      otpCode: this.formResetPassword.value.otpCode,
      newPassword: this.formResetPassword.value.newPassword,
      confirmPassword: this.formResetPassword.value.confirmPassword

    }

    console.log(requestPassword);

    this.baseService.ResetEmail(environment.endPoint.register.resetPassword , requestPassword).subscribe({
      next: value => {
        this.router.navigateByUrl("/login")
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
