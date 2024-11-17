import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-bar-customer',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './side-bar.customer.component.html',
  styleUrl: './side-bar.customer.component.scss'
})
export class SideBarCustomerComponent {

}
