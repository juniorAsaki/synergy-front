import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BaseService} from '../../../core/services/base.service';
import {environment} from '../../../../environments/environment.dev';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{


  formGroup !: FormGroup;

  constructor(private fb: FormBuilder , private router: Router , private baseService: BaseService) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: this.fb.control(null , Validators.required),
      password: this.fb.control(null , Validators.required),
      firstName: this.fb.control(null , Validators.required),
      lastName: this.fb.control(null , Validators.required),
    })
  }

  isInvalidaedInput(input: AbstractControl<any>){
    return input.invalid && (input.touched || input.dirty);
  }

  register(){

    const owner = {
      firstName: this.formGroup.value.firstName,
      lastName: this.formGroup.value.lastName,
      user: {
        email: this.formGroup.value.email,
        password: this.formGroup.value.password
      }
    }

    console.log(owner);

    this.baseService.create(environment.endPoint.register.owner , owner).subscribe({
      next: value => {
        this.router.navigate(["/validate-email" , this.formGroup.value.email]);
      },
      error: err => {
        console.error(err);
      }
    })
  }

}
