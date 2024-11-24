import {Component, OnInit, signal} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BaseService} from '../../../../core/services/base.service';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment.dev';
import {Residence} from '../../../../domaine/interfaces/residence.interface';
import {SearchService} from '../../../../core/services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MenuModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  formSearch!: FormGroup;


  constructor(private searchS: SearchService , private formBuilder: FormBuilder , private baseService: BaseService, private router: Router) {
  }

  ngOnInit(): void {
    this.formSearch = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      city: this.formBuilder.control('', [Validators.required]),
      district: this.formBuilder.control('', [Validators.required]),
      price: this.formBuilder.control('', [Validators.required]),
    })
  }


  searchProperty() {
      this.baseService.create(environment.endPoint.residence.search , this.formSearch.value).subscribe({
        next: (result: Residence[]) => {
          if(result.length == 0){
            this.searchS.errorSearch = "Aucune residence trouvée";
            this.searchS.Properties.set([]);
            console.log(this.searchS.errorSearch);
          }else {
            this.searchS.searchBool = true;
            this.searchS.Properties.set(result);
            this.router.navigateByUrl("/biens")
          }
        },
        error: (error) => {
          console.error(error);
        }
      })
  }
}
