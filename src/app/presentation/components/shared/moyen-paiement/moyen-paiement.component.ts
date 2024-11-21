import { Component } from '@angular/core';
import {NavBarComponent} from '../../layout/nav-bar/nav-bar.component';
import {FooterComponent} from '../../layout/footer/footer.component';
import {RouterLink} from '@angular/router';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-moyen-paiement',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    RouterLink,
    ToastModule
  ],
  templateUrl: './moyen-paiement.component.html',
  styleUrl: './moyen-paiement.component.scss'
})
export class MoyenPaiementComponent {

  moyenValid = false;
  errorMessage: any;

  constructor(private ms: MessageService) {
  }

  onClickMoyenOfPaiement(e: Event){
    let input = e.target as HTMLInputElement

    this.errorMessage = null;

    if(input.checked){
      switch (input.value){
        case "orange":
          this.moyenValid = false
          this.ms.add({ severity: 'error', summary: 'error', detail: 'Orange non disponible' , life: 3000});
          break;
        case "mtn":
          this.moyenValid = false
          this.ms.add({ severity: 'error', summary: 'error', detail: 'MTN non disponible' , life: 3000});
          break;
        case "moov":
          this.moyenValid = false
          this.ms.add({ severity: 'error', summary: 'error', detail: 'Moov non disponible' , life: 3000});
          break;
        case "visa":
          this.moyenValid = false
          this.ms.add({ severity: 'error', summary: 'error', detail: 'Visa non disponible' , life: 3000});
          break;
        case "mastercard":
          this.moyenValid = false
          this.ms.add({ severity: 'error', summary: 'error', detail: 'Mastercard non disponible' , life: 3000});
          break;
        case "paypal":
          this.moyenValid = false
          this.ms.add({ severity: 'error', summary: 'error', detail: 'PayPal non disponible' , life: 3000});
          break;
        default:
          break;
      }
    }
  }

}
