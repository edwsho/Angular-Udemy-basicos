import { Component, OnInit } from '@angular/core';
import { DbzServices } from '../services/dbz.service';

interface Personaje {
  nombre : string,
  poder  : number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre : "",
    poder : 0
  }

  constructor(){
      
  }

  /* agregar(){
    if (this.nuevo.nombre.trim().length === 0 ) {
      return;
    }
    this.listapersonajes.push(this.nuevo);
    
    this.nuevo = {
      nombre : "",
      poder : 0
    }
  } */


}
