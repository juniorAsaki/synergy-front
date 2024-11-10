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
    HeaderComponent,
    FooterComponent,
    NgClass,
    SearchComponent,
    CarouselModule,
    TagModule,
    Button,
    NavBarComponent,
    GoogleMapDemoComponent
  ],
  templateUrl: './list-biens.component.html',
  styleUrl: './list-biens.component.scss'
})
export class ListBiensComponent  implements AfterViewInit{


  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  //map!: google.maps.Map;

  properties: Property[] = [
    {
      name: 'Izia Résidence - Studio à Angré',
      type: 'Appartement',
      city: 'Abidjan',
      description: 'Studio à Angré',
      pricePerNight: 23,
      totalPrice: 113,
      imageUrl: 'image1.jpg',
      location: { lat: 5.345317, lng: -4.024429 }
    },
    {
      name: 'Superbe T2 sécurisé au cœur',
      type: 'Appartement',
      city: 'Abidjan',
      description: 'Superbe T2 sécurisé',
      pricePerNight: 32,
      totalPrice: 158,
      imageUrl: 'image2.jpg',
      location: { lat: 5.360317, lng: -4.030429 }
    },
    {
      name: 'Auberge de Jeunesse Hostel',
      type: 'Chambre partagée',
      city: 'Abidjan',
      description: 'Auberge de Jeunesse',
      pricePerNight: 12,
      totalPrice: 60,
      imageUrl: 'image3.jpg',
      location: { lat: 5.332317, lng: -4.022429 }
    }
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    const center = { lat: 5.345317, lng: -4.024429 }; // Coordonnées d'Abidjan
 //   this.map = new google.maps.Map(this.mapContainer.nativeElement, {
  //    center: center,
    //  zoom: 12
    //});

    this.properties.forEach(property => {
      new google.maps.Marker({
        position: property.location,
       // map: this.map,
        label: `${property.pricePerNight} €`
      });
    });
  }


}
