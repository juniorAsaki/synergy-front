import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

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

}
