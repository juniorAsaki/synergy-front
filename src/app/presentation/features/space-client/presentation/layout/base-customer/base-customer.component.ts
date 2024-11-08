import { Component } from '@angular/core';
import {SideBarCustomerComponent} from '../side-bar-customer/side-bar.customer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-base-customer',
  standalone: true,
  imports: [
    SideBarCustomerComponent,
    RouterOutlet
  ],
  templateUrl: './base-customer.component.html',
  styleUrl: './base-customer.component.scss'
})
export class BaseCustomerComponent {

}
