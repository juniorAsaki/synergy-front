import {Component, ElementRef, OnInit, signal, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {BaseService} from '../../../core/services/base.service';
import {Residence} from '../../../domaine/interfaces/residence.interface';
import {environment} from '../../../../environments/environment.dev';
import {FormsModule} from '@angular/forms';
import {SharedDataServiceService} from '../../../core/services/shared-data-service.service';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {Button} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-detail-bien',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ToastModule,
    Button,
    DialogModule,
  ],
  templateUrl: './detail-bien.component.html',
  styleUrl: './detail-bien.component.scss'
})
export class DetailBienComponent implements OnInit{
  visible: boolean = false;

  residence = signal<any>("");

  sejour = signal({
    dateDepart: "",
    dateArrive: "",
    nbresDays: 0,
    TotalPay: 0,
    TotalPayWithFrais: 0
  })


  constructor(private ms: MessageService , private router: Router , private baseService: BaseService , private route: ActivatedRoute , private sd: SharedDataServiceService) {
  }

  ngOnInit(): void {
    this.getResidenceBySlug();
  }

  private getResidenceBySlug() {
    this.baseService.getOne(environment.endPoint.residence.getOne , this.route.snapshot.paramMap.get('slug')).subscribe({
      next: (value: Residence) => {
        this.residence.set(value)
      },
      error: err => console.error(err)
    })
  }

  chnage($event: Event) {
    this.getNumberOfDays(this.sejour().dateArrive , this.sejour().dateDepart)
    this.sejour().TotalPay = this.sejour().nbresDays * this.residence().price
    this.sejour().TotalPayWithFrais = this.sejour().TotalPay + 100
  }

  getNumberOfDays(arrivalDate: string, departureDate: string) {
    const arrival = new Date(arrivalDate);
    const departure = new Date(departureDate);

    // Calcul de la différence en millisecondes
    const differenceInTime = departure.getTime() - arrival.getTime();

    // Conversion en jours
    this.sejour().nbresDays = differenceInTime / (1000 * 3600 * 24);

  }


  goToPaiement() {
    this.router.navigateByUrl('/paiement');
  }

  // goToDetailReservation() {
  //
  //   if (this.sejour().dateArrive == "" && this.sejour().dateArrive == "") {
  //     this.ms.add({ severity: 'error', summary: 'error', detail: 'Renseigne ton sejour !' , life: 3000});
  //
  //   } else {
  //     const modal = new bootstrap.Modal(this.exampleModal.nativeElement);
  //     modal.show();    }
  // }

  showDialog() {
      if (this.sejour().dateArrive == "" && this.sejour().dateArrive == "") {
        this.ms.add({ severity: 'error', summary: 'error', detail: 'Renseigne ton sejour !' , life: 3000});
      } else {
        this.visible = true;
      }
  }
}
