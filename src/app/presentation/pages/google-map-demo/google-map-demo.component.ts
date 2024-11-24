import {Component, OnInit} from '@angular/core';
import {GoogleMap, GoogleMapsModule} from '@angular/google-maps';
import {NgForOf, NgIf} from '@angular/common';
import {SearchService} from '../../../core/services/search.service';

@Component({
  selector: 'app-google-map-demo',
  standalone: true,
  imports: [
    GoogleMap,
    GoogleMapsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './google-map-demo.component.html',
  styleUrl: './google-map-demo.component.scss'
})
export class GoogleMapDemoComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 7.539989, lng: -5.54708 };
  zoom = 2;
  selectedMarker: string | null = null; // Pour suivre le marqueur sélectionné
  markerPositions: { position: google.maps.LatLngLiteral; label: string }[] = [];


  constructor( public searchS: SearchService) {
  }

  options: google.maps.MapOptions = {
    restriction: {
      latLngBounds: {
        north: 10.7, // Limite nord
        south: 4.0,  // Limite sud
        west: -8.6,  // Limite ouest
        east: -2.5,  // Limite est
      },
      strictBounds: true, // Empêche le déplacement au-delà des limites
    },
  };

  ngOnInit(): void {
    console.log(this.markerPositions + ":" + this.searchS.Properties())
    console.log(this.searchS.searchBool)
    console.log(this.searchS.errorSearch)

    this.searchS.Properties().forEach(property => {
      this.markerPositions.push(
        {position: {lat: Number.parseInt(property.latitude) , lng: Number.parseInt(property.longitude)} , label: property.name}
      )
    })
  }

}
