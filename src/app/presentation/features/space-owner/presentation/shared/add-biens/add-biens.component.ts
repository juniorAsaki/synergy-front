import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BaseService} from '../../../../../../core/services/base.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {environment} from '../../../../../../../environments/environment.dev';
import {Residence} from '../../../../../../domaine/interfaces/residence.interface';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {HttpClient} from '@angular/common/http';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-biens',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    ToastModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './add-biens.component.html',
  styleUrl: './add-biens.component.scss'
})
export class AddBiensComponent implements OnInit{

  formResidence!: FormGroup
  selectedPictures: File[] = [];

  address: string = ''; // Adresse saisie par l'utilisateur
  coordinates: { lat: number; lng: number } | null = null; // Coordonnées récupérées



  constructor(private ms: MessageService , private baseService: BaseService , private fb: FormBuilder , private http: HttpClient) {
  }

  ngOnInit(): void {

    this.formResidence = this.fb.group({
      name: this.fb.control("" , Validators.required),
      price: this.fb.control("" , Validators.required),
      description: this.fb.control("" , Validators.required),
      rooms: this.fb.control("" , Validators.required),
      showers: this.fb.control("" , Validators.required),
      diningRoom: this.fb.control("" , Validators.required),
      terrace: this.fb.control("" , Validators.required),
      lounges: this.fb.control("" , Validators.required),
      wifi: this.fb.control(null , Validators.required),
      parking: this.fb.control(null , Validators.required),
      catering: this.fb.control(null , Validators.required),
      cleaning: this.fb.control(null , Validators.required),
      available: this.fb.control(null , Validators.required),
      city: this.fb.control("" , Validators.required),
      district: this.fb.control("" , Validators.required),
    });

  }

  onFilesSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedPictures = Array.from(input.files);
    }
  }

  async saveProperty(): Promise<void> {

    await this.onSubmit();

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
      longitude: this.coordinates?.lng,
      latitude: this.coordinates?.lat,
      address: {
        city: this.formResidence.value.city + "Côte d'Ivoire",
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

  async onSubmit(): Promise<void> {
    let city = this.formResidence.value.city;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;

    try {
      const response: any = await this.http.get(url).toPromise(); // Utilisation de `await` pour attendre la réponse

        if (response && response.length > 0) {
          const location = response[0];
          this.coordinates = { lat: parseFloat(location.lat), lng: parseFloat(location.lon) };
        } else {
          console.log('Adresse introuvable !');
        }

    } catch (error) {
      console.error('Erreur lors de la récupération des coordonnées :', error);
    }

  }
}
