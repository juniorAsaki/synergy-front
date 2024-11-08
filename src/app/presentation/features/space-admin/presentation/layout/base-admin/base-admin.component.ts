import { Component } from '@angular/core';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-base-admin',
  standalone: true,
  imports: [
    SideBarComponent,
    RouterOutlet
  ],
  templateUrl: './base-admin.component.html',
  styleUrl: './base-admin.component.scss'
})
export class BaseAdminComponent {

}
