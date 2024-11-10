import { Component } from '@angular/core';
import {GoogleMap, GoogleMapsModule} from '@angular/google-maps';

@Component({
  selector: 'app-google-map-demo',
  standalone: true,
  imports: [
    GoogleMap,
    GoogleMapsModule
  ],
  templateUrl: './google-map-demo.component.html',
  styleUrl: './google-map-demo.component.scss'
})
export class GoogleMapDemoComponent {
  center: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };
  zoom = 12;

  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 37.7749, lng: -122.4194 },
    { lat: 37.7849, lng: -122.4094 }
  ];
}
