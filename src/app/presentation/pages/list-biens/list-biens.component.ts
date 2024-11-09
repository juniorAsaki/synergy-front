import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {CarouselModule} from 'primeng/carousel';
import {TagModule} from 'primeng/tag';
import {Button} from 'primeng/button';
import {HeaderComponent} from '../../components/layout/header/header.component';
import {FooterComponent} from '../../components/layout/footer/footer.component';
import {SearchComponent} from '../../components/layout/search/search.component';
import {NavBarComponent} from '../../components/layout/nav-bar/nav-bar.component';

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
    NavBarComponent
  ],
  templateUrl: './list-biens.component.html',
  styleUrl: './list-biens.component.scss'
})
export class ListBiensComponent  implements OnInit{

  responsiveOptions: any[] | undefined;

  products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Residence Nabil',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'indisponible',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Residence Nabil',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'disponible',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Residence Nabil',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'disponible',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Residence Nabil',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: "indisponible",
      rating: 5
    },


  ]

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  getSeverity(statut: any) {
    if (statut == "disponible") {
        return 'success';
    }else {
      return 'warning';
    }
  }
}
