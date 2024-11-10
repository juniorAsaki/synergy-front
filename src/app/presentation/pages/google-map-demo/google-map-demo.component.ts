import { Component } from '@angular/core';
import {GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'app-google-map-demo',
  standalone: true,
  imports: [
    GoogleMap
  ],
  templateUrl: './google-map-demo.component.html',
  styleUrl: './google-map-demo.component.scss'
})
export class GoogleMapDemoComponent {


  center: google.maps.LatLngLiteral = {
    lat: 6.995295511316816,
    lng: -6.442837737668552
  };
  zoom = 4;
  display!: google.maps.LatLngLiteral;

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng){
      this.center = (event.latLng.toJSON());
    }
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng){
      this.display = event.latLng.toJSON();
    }
  }
}
