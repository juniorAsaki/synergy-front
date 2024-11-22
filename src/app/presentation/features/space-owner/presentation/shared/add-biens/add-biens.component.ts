import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BaseService} from '../../../../../../core/services/base.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {environment} from '../../../../../../../environments/environment.dev';
import {Residence} from '../../../../../../domaine/interfaces/residence.interface';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';

@Component({
  selector: 'app-add-biens',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    ToastModule
  ],
  templateUrl: './add-biens.component.html',
  styleUrl: './add-biens.component.scss'
})
export class AddBiensComponent implements OnInit{

  formResidence!: FormGroup
  selectedPictures: File[] = [];


  constructor(private ms: MessageService , private baseService: BaseService , private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.formResidence = this.fb.group({
      name: this.fb.control("Residence Nabil" , Validators.required),
      price: this.fb.control("15000" , Validators.required),
      description: this.fb.control("belle vue sur la lagune" , Validators.required),
      rooms: this.fb.control("2" , Validators.required),
      showers: this.fb.control("3" , Validators.required),
      diningRoom: this.fb.control("1" , Validators.required),
      terrace: this.fb.control("1" , Validators.required),
      lounges: this.fb.control("1" , Validators.required),
      wifi: this.fb.control(false , Validators.required),
      parking: this.fb.control(true , Validators.required),
      catering: this.fb.control(false , Validators.required),
      cleaning: this.fb.control(true , Validators.required),
      available: this.fb.control(false , Validators.required),
      city: this.fb.control("Abidjan , Plateau" , Validators.required),
      district: this.fb.control("Avenue Nogue" , Validators.required),
    });

  }

  onFilesSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedPictures = Array.from(input.files);
    }
  }

  async saveProperty(): Promise<void> {

    const residence = {
      name: this.formResidence.value.name,
      price: this.formResidence.value.price,
      description: this.formResidence.value.description,
      rooms: +this.formResidence.value.rooms,
      showers: +this.formResidence.value.showers,
      diningRoom: +this.formResidence.value.diningRoom,
      terrace: +this.formResidence.value.terrace,
      lounges: +this.formResidence.value.lounges,
      wifi: this.formResidence.value.wifi,
      parking: this.formResidence.value.parking,
      catering: this.formResidence.value.catering,
      cleaning: this.formResidence.value.cleaning,
      available: this.formResidence.value.available,
      address: {
        city: this.formResidence.value.city,
        district: this.formResidence.value.district
      }
    }

    try {
      // 1. Enregistrer la résidence
      const savedResidence: Residence = await this.baseService
        .create(environment.endPoint.residence.save, residence)
        .toPromise(); // Convertir l'observable en une promesse

      console.log('Résidence enregistrée avec succès :', savedResidence);

      // 2. Préparer le FormData pour les images
      const formData = new FormData();
      this.selectedPictures.forEach((file) => {
        formData.append('pictures', file);
      });

      // 3. Enregistrer les images
      const imageResponse = await this.baseService
        .create(environment.endPoint.residence.savePicture, formData , savedResidence.id)
        .toPromise();

      this.ms.add({ severity: 'success', summary: 'success', detail: 'Propriété enregistré avec succèss !' , life: 3000});

    } catch (error) {
      console.error('Erreur lors de l\'enregistrement :', error);
    }
  }

}
