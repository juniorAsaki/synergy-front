import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/layout/header/header.component';
import {NavBarComponent} from '../../components/layout/nav-bar/nav-bar.component';
import {MainComponent} from '../../components/layout/main/main.component';
import {FooterComponent} from '../../components/layout/footer/footer.component';
import {AProposComponent} from '../a-propos/a-propos.component';

@Component({
  selector: 'app-base-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    NavBarComponent,
    MainComponent,
    FooterComponent,
    AProposComponent
  ],
  templateUrl: './base-landing.component.html',
  styleUrl: './base-landing.component.scss'
})
export class BaseLandingComponent {

}
