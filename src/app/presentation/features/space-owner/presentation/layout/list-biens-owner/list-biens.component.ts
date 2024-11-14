import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-biens-owner',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './list-biens.component.html',
  styleUrl: './list-biens.component.scss'
})
export class ListBiensOwnerComponent {

}
