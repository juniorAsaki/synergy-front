import { Component } from '@angular/core';
import {NavBarComponent} from '../../layout/nav-bar/nav-bar.component';
import {FooterComponent} from '../../layout/footer/footer.component';

@Component({
  selector: 'app-moyen-paiement',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './moyen-paiement.component.html',
  styleUrl: './moyen-paiement.component.scss'
})
export class MoyenPaiementComponent {

}
