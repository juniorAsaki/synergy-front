import {Component, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {BaseService} from '../../../core/services/base.service';
import {environment} from '../../../../environments/environment.dev';

@Component({
  selector: 'app-validate-email',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './validate-email.component.html',
  styleUrl: './validate-email.component.scss'
})
export class ValidateEmailComponent implements OnInit{

  otpForm!: FormGroup;
  email!: string;

  constructor(private route: ActivatedRoute , private fb: FormBuilder , private baseService: BaseService , private router: Router) {
  }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];

    // Initialiser le formulaire avec des contrôles pour chaque chiffre de l'OTP
    this.otpForm = this.fb.group({
      otp1: ['', [Validators.required, Validators.maxLength(1)]],
      otp2: ['', [Validators.required, Validators.maxLength(1)]],
      otp3: ['', [Validators.required, Validators.maxLength(1)]],
      otp4: ['', [Validators.required, Validators.maxLength(1)]],
      otp5: ['', [Validators.required, Validators.maxLength(1)]],
      otp6: ['', [Validators.required, Validators.maxLength(1)]]
    });
  }




  validateEmail() {

    // Concaténer les valeurs pour former le code OTP
    const otpCodeString = Object.values(this.otpForm.value).join('');


    const EmailCode = {
      email: this.email,
      otpCode: +otpCodeString
    }

    console.log(EmailCode);
    this.baseService.create(environment.endPoint.register.verifyCountUser, EmailCode).subscribe({
      next: value => {
        this.router.navigateByUrl("/login");
      },
      error: err => {
        console.error(err);
      }
    })
  }

  moveToNext(event: any, number: number) {
    if (event.target.value.length === 1 && number < 3) {
      const nextInput = document.getElementById(`otp${number + 2}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
}
