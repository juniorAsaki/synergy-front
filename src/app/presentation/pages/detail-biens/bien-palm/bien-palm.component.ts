import {Component, OnInit} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Button} from 'primeng/button';
import {GalleriaModule} from 'primeng/galleria';
import {PanelModule} from 'primeng/panel';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-bien-palm',
  standalone: true,
  imports: [
    Button,
    GalleriaModule,
    PanelModule,
    RouterLink
  ],
  templateUrl: './bien-palm.component.html',
  styleUrl: './bien-palm.component.scss',
  providers:[
    BrowserAnimationsModule
  ]
})
export class BienPalmComponent implements OnInit {



  images: any[] | undefined;

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this._activeIndex = newValue;
    }
  }

  _activeIndex: number = 2;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];


  ngOnInit() {
    this.images = [
      {
        itemImageSrc: 'images/Image 2.jpeg',
        thumbnailImageSrc: 'images/Image 2.jpeg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'images/Image 2.jpeg',
        thumbnailImageSrc: 'images/Image 2.jpeg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'images/Image 2.jpeg',
        thumbnailImageSrc: 'images/Image 2.jpeg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'images/Image 2.jpeg',
        thumbnailImageSrc: 'images/Image 2.jpeg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'images/Image 2.jpeg',
        thumbnailImageSrc: 'images/Image 2.jpeg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'images/Image 2.jpeg',
        thumbnailImageSrc: 'images/Image 2.jpeg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'images/Image 2.jpeg',
        thumbnailImageSrc: 'images/Image 2.jpeg',
        alt: 'Description for Image 1',
        title: 'Title 1'
      },
    ]
  }

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }
}
