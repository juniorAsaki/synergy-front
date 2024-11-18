import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BaseService} from '../../../../../../core/services/base.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {environment} from '../../../../../../../environments/environment.dev';

@Component({
  selector: 'app-add-biens',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './add-biens.component.html',
  styleUrl: './add-biens.component.scss'
})
export class AddBiensComponent implements OnInit{

  formResidence!: FormGroup
  selectedPictures: File[] = [];


  constructor(private baseService: BaseService , private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.formResidence = this.fb.group({
      name: this.fb.control(null , Validators.required),
      price: this.fb.control(null , Validators.required),
      description: this.fb.control(null , Validators.required),
      NumberOfRooms: this.fb.control(null , Validators.required),
      NumberOfShowers: this.fb.control(null , Validators.required),
      NumberOfDiningRoom: this.fb.control(null , Validators.required),
      NumberOfTerrace: this.fb.control(null , Validators.required),
      NumberOfLounges: this.fb.control(null , Validators.required),
      wifi: this.fb.control(null , Validators.required),
      parking: this.fb.control(null , Validators.required),
      catering: this.fb.control(null , Validators.required),
      cleaning: this.fb.control(null , Validators.required),
      available: this.fb.control(null , Validators.required),
      city: this.fb.control(null , Validators.required),
      district: this.fb.control(null , Validators.required),
      availabilityDate: this.fb.control(null , Validators.required),
    });

  }

  onFilesSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedPictures = Array.from(input.files);
    }
  }

  saveProperty(){
    const formData = new FormData();
    formData.append("name" , this.formResidence.value.name);
    formData.append("price" , this.formResidence.value.price);
    formData.append("description" , this.formResidence.value.description);
    formData.append("NumberOfRooms" , this.formResidence.value.NumberOfRooms);
    formData.append("NumberOfShowers" , this.formResidence.value.NumberOfShowers);
    formData.append("NumberOfDiningRoom" , this.formResidence.value.NumberOfDiningRoom);
    formData.append("NumberOfTerrace" , this.formResidence.value.NumberOfTerrace);
    formData.append("NumberOfLounges" , this.formResidence.value.NumberOfLounges);
    formData.append("wifi" , this.formResidence.value.wifi);
    formData.append("parking" , this.formResidence.value.parking);
    formData.append("catering" , this.formResidence.value.catering);
    formData.append("cleaning" , this.formResidence.value.cleaning);
    formData.append("available" , this.formResidence.value.available);
    formData.append("city" , this.formResidence.value.city);
    formData.append("district" , this.formResidence.value.district);
    formData.append("availabilityDate" , this.formResidence.value.availabilityDate);

    // Ajouter chaque fichier à FormData
    this.selectedPictures.forEach((file, index) => {
      formData.append('images', file);
    });


  }
}
