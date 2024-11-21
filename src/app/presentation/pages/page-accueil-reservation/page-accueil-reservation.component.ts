import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {NavBarComponent} from '../../components/layout/nav-bar/nav-bar.component';

@Component({
  selector: 'app-page-accueil-reservation',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule ],
  templateUrl: './page-accueil-reservation.component.html',
  styleUrl: './page-accueil-reservation.component.scss'
})
export class PageAccueilReservationComponent {

}
