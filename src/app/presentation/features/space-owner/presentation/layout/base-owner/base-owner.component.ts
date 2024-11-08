import { Component } from '@angular/core';
import {SideBarOwnerComponent} from '../side-bar-owner/side-bar.owner.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-base-owner',
  standalone: true,
  imports: [
    SideBarOwnerComponent,
    RouterOutlet
  ],
  templateUrl: './base-owner.component.html',
  styleUrl: './base-owner.component.scss'
})
export class BaseOwnerComponent {

}
