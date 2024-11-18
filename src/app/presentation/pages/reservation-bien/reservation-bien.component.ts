import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NavBarComponent} from "../../components/layout/nav-bar/nav-bar.component";
import {FooterComponent} from '../../components/layout/footer/footer.component';

@Component({
  selector: 'app-reservation-bien',
  standalone: true,
  imports: [
    RouterLink,
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './reservation-bien.component.html',
  styleUrl: './reservation-bien.component.scss'
})
export class ReservationBienComponent {

}
