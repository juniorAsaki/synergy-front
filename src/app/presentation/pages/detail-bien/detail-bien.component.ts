import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {BaseService} from '../../../core/services/base.service';
import {Residence} from '../../../domaine/interfaces/residence.interface';
import {environment} from '../../../../environments/environment.dev';

@Component({
  selector: 'app-detail-bien',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './detail-bien.component.html',
  styleUrl: './detail-bien.component.scss'
})
export class DetailBienComponent implements OnInit{

  residence!: Residence;

  constructor(private baseService: BaseService , private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getResidenceBySlug();
  }

  private getResidenceBySlug() {
    this.baseService.getOne(environment.endPoint.residence.getOne , this.route.snapshot.paramMap.get('slug')).subscribe({
      next: value => this.residence = value,
      error: err => console
    })
  }
}
