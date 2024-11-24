import {Injectable, signal, WritableSignal} from '@angular/core';
import {Residence} from '../../domaine/interfaces/residence.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  Properties =  signal<Residence[]>([]);
  errorSearch !: string;
  searchBool: boolean = false;

  constructor(

  ) { }
}
