import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class AreaService {
    listArea: any[] = [
        {id: 1, nombre: 'Economia'},
        {id: 2, nombre: 'Obras Publicas'},
        {id: 3, nombre: 'Cementerio'},
        {id: 4, nombre: 'Dependencias'},
        {id: 5, nombre: 'Becas'},

      ];

      constructor() { }
    
  getAreas(){
    return this.listArea.slice();
  }
}