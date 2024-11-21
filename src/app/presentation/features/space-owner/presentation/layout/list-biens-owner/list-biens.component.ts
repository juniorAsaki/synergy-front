import {Component, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Residence} from '../../../../../../domaine/interfaces/residence.interface';
import {BaseService} from '../../../../../../core/services/base.service';
import {environment} from '../../../../../../../environments/environment.dev';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {AuthService} from '../../../../../../core/services/auth.service';

@Component({
  selector: 'app-list-biens-owner',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './list-biens.component.html',
  styleUrl: './list-biens.component.scss'
})
export class ListBiensOwnerComponent {

  ListResidences = signal<Residence[]>([]);

  constructor(private baseService: BaseService , public authS: AuthService) {
  }

  ngOnInit(): void {
    this.getAllResidence();
  }

  getAllResidence() {
    this.baseService.getAll(environment.endPoint.residence.getPropertyOwner , this.authS.AuthenticateSate.userID).subscribe({
      next: (value: Residence[]) => {
        this.ListResidences.update(v => v = value)
        console.log(this.ListResidences())
      },
      error: err => console.error(err)
    })
  }

  trackBySlug(index: number, residence: any): string {
    return residence.slug;
  }

}
