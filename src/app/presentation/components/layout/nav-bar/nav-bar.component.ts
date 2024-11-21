import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../../core/services/auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor(public authService: AuthService , private router: Router) {
  }

  espace() {
    if(this.authService.AuthenticateSate.roles == "OWNER"){
      this.router.navigateByUrl("/owner")
    }else if(this.authService.AuthenticateSate.roles == "CUSTOMER"){
      this.router.navigateByUrl("/customer")
    }else if(this.authService.AuthenticateSate.roles == "ADMIN"){
      this.router.navigateByUrl("/admin")
    }
  }
}
