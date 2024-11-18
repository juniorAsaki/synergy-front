import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Residence} from '../../../../domaine/interfaces/residence.interface';
import {BaseService} from '../../../../core/services/base.service';
import {environment} from '../../../../../environments/environment.dev';
import {errorContext} from 'rxjs/internal/util/errorContext';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  ListResidences!: Residence[];

  constructor(private baseService: BaseService) {
  }


  ngOnInit(): void {
    this.getAllResidence();
  }

  getAllResidence() {
    this.baseService.getAll(environment.endPoint.residence.getAll).subscribe({
      next: value => this.ListResidences = value,
      error: err => console.error(err)
    })
  }

}
