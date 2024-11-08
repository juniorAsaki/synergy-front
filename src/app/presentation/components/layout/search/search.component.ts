import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MenuModule, ButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {



}
