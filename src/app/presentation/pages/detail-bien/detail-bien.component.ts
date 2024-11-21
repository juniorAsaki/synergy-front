import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {BaseService} from '../../../core/services/base.service';
import {Residence} from '../../../domaine/interfaces/residence.interface';
import {environment} from '../../../../environments/environment.dev';
import {FormsModule} from '@angular/forms';
import {SharedDataServiceService} from '../../../core/services/shared-data-service.service';
import {LocalStorageService} from '../../../core/services/local-storage.service';

@Component({
  selector: 'app-detail-bien',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './detail-bien.component.html',
  styleUrl: './detail-bien.component.scss'
})
export class DetailBienComponent implements OnInit{

  residence = signal<any>("");

  sejour = signal({
    dateDepart: "",
    dateArrive: "",
    nbresDays: 0,
    TotalPay: 0,
    TotalPayWithFrais: 0
  })


  constructor(private baseService: BaseService , private route: ActivatedRoute , private sd: SharedDataServiceService) {
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

  protected readonly NaN = NaN;
  protected readonly isNaN = isNaN;
  protected readonly Number = Number;
}
