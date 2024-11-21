import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {

  constructor() { }

  private data: any;

  setData(value: any) {
    this.data = value;
  }

  getData() {
    return this.data;
  }
}
