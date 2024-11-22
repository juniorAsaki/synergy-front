import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {LocalStorageService} from '../../../../../../core/services/local-storage.service';

@Component({
  selector: 'app-side-bar-owner',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './side-bar.owner.component.html',
  styleUrl: './side-bar.owner.component.scss'
})
export class SideBarOwnerComponent {

  constructor(private router: Router , private localStorage: LocalStorageService) { }

  logout() {
    this.localStorage.removeToken();
    this.router.navigateByUrl('/login');
  }
}
