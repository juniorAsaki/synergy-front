import {AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import {TagModule} from 'primeng/tag';
import {Button} from 'primeng/button';
import {HeaderComponent} from '../../components/layout/header/header.component';
import {FooterComponent} from '../../components/layout/footer/footer.component';
import {SearchComponent} from '../../components/layout/search/search.component';
import {NavBarComponent} from '../../components/layout/nav-bar/nav-bar.component';
import {GoogleMapDemoComponent} from '../google-map-demo/google-map-demo.component';
import {RouterLink} from '@angular/router';
import {PageResidence, Residence} from '../../../domaine/interfaces/residence.interface';
import {BaseService} from '../../../core/services/base.service';
import {environment} from '../../../../environments/environment.dev';
import {Observable, of} from 'rxjs';


declare var google: any;

interface Property {
  name: string;
  type: string;
  city: string;
  description: string;
  pricePerNight: number;
  totalPrice: number;
  imageUrl: string;
  location: { lat: number; lng: number };
}


@Component({
  selector: 'app-list-biens',
  standalone: true,
  imports: [
    SearchComponent,
    RouterLink,
    GoogleMapDemoComponent,
    NgIf,
    NgClass
  ],
  templateUrl: './list-biens.component.html',
  styleUrl: './list-biens.component.scss'
})
export class ListBiensComponent  implements OnInit {

  ListResidences = signal<Residence[]>([]);
  currentPaage = 0;
  pageSize: number = 9;
  totalPage: number = 0;

  constructor(private baseService: BaseService) {
  }

  ngOnInit(): void {
    this.getAllResidence();
    this.getPageResidence(this.currentPaage , this.pageSize)
  }

  getAllResidence() {
    this.baseService.getAll(environment.endPoint.residence.getAll).subscribe({
      next: (value: Residence[]) => {
        this.ListResidences.set(value);
      },
      error: err => console.error(err)
    })
  }

  getPageResidence(page: number , size: number): Observable<PageResidence> {

    let index = page * size;

    let totalPage = Math.ceil(page / size);

    if(this.ListResidences().length % size != 0) {
      totalPage++;
    }

    let pageResidences = this.ListResidences().slice(index , index+size);

    return of({page:page , size:size , totalPage:totalPage , residences:pageResidences});
  }


}
