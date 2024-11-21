import {Component, OnInit, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Residence} from '../../../../domaine/interfaces/residence.interface';
import {BaseService} from '../../../../core/services/base.service';
import {environment} from '../../../../../environments/environment.dev';
import {AsyncPipe, NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgClass,
    NgOptimizedImage,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  ListResidences = signal<Residence[]>([]);

  constructor(private baseService: BaseService) {
  }

  ngOnInit(): void {
    this.getAllResidence();
  }

  getAllResidence() {
    this.baseService.getAll(environment.endPoint.residence.getAll).subscribe({
      next: (value: Residence[]) => {
        this.ListResidences.update(v => v = value.slice(0,4))
        console.log(this.ListResidences())
      },
      error: err => console.error(err)
    })


  }

  trackBySlug(index: number, residence: any): string {
    return residence.slug;
  }


}
