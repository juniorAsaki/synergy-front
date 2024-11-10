import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgClass} from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import {TagModule} from 'primeng/tag';
import {Button} from 'primeng/button';
import {HeaderComponent} from '../../components/layout/header/header.component';
import {FooterComponent} from '../../components/layout/footer/footer.component';
import {SearchComponent} from '../../components/layout/search/search.component';
import {NavBarComponent} from '../../components/layout/nav-bar/nav-bar.component';
import {GoogleMapDemoComponent} from '../google-map-demo/google-map-demo.component';
import {RouterLink} from '@angular/router';


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
    GoogleMapDemoComponent
  ],
  templateUrl: './list-biens.component.html',
  styleUrl: './list-biens.component.scss'
})
export class ListBiensComponent  {




}
