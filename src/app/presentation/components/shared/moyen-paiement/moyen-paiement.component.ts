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
          this.initializePaiementPro("OMCIV2");
          break;
        case "mtn":
          this.initializePaiementPro("MOMOCI");
          break;
        case "moov":
          this.initializePaiementPro("FLOOZ");
          break;
        case "visa":
          this.initializePaiementPro("CARD")
          break;
        case "mastercard":
          break;
        case "paypal":
          break;
        case "wave":
          this.initializePaiementPro("WAVECI");
          break;
        default:
          break;
      }
    }
  }

  async initializePaiementPro(chanel: string) {
    console.log('Initializing paiement pro');
    try {
      const response = await fetch(
        'https://www.paiementpro.net/webservice/onlinepayment/js/initialize/initialize.php',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            merchantId: 'PP-F3571',
            amount: 100,
            customerId: 2,
            channel: chanel,//le channel
            customerEmail: 'konedieu5@gmail.com',//l'email du client
            customerFirstName: 'KONE',//nom du client
            customerLastname: 'Kolotioloman Dieudonne',//prenom du client
            customerPhoneNumber: '2250704817000',//numero
            referenceNumber: 'VV' + new Date().getTime(),
            notificationURL: 'http://localhost:4200/notification/',
            returnURL: 'http://localhost:4200/home',///lien de retour sur ta plateforme
            returnContext: 'paiement=2&ok=1&oui=2',
          }),
        }
      );

      const data = await response.json();
      console.log('data', data);

      if (data.success) {
        window.location.href = data.url; // Redirection vers la page de paiement
      } else {
      }
    } catch (error) {
      this.ms.add({ severity: 'error', summary: 'error', detail: 'Moyen de paiement indisponible' , life: 3000});
    } finally {
    }
  }

}
