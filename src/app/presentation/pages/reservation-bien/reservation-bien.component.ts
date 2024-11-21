import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {NavBarComponent} from "../../components/layout/nav-bar/nav-bar.component";
import {FooterComponent} from '../../components/layout/footer/footer.component';
import {environment} from '../../../../environments/environment.dev';
import {Residence} from '../../../domaine/interfaces/residence.interface';
import {BaseService} from '../../../core/services/base.service';
import {SharedDataServiceService} from '../../../core/services/shared-data-service.service';

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
export class ReservationBienComponent implements OnInit{

  residence = signal<any>("");


  constructor(private baseService: BaseService , private route: ActivatedRoute , private sd: SharedDataServiceService) {
  }


  ngOnInit(): void {
    this.getResidenceBySlug();
    console.log(this.sd.getData())
  }

  private getResidenceBySlug() {
    this.baseService.getOne(environment.endPoint.residence.getOne , this.route.snapshot.paramMap.get('slug')).subscribe({
      next: (value: Residence) => {
        this.residence.set(value)
      },
      error: err => console.error(err)
    })
  }

}
