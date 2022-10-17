import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
      nombre : "",
      poder : 0
  }

  /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>(); */

  constructor( private dbzServices : DbzServices){}

  agregar(){
    if (this.nuevo.nombre.trim().length === 0 ) {
      return;
    }
    console.log(this.nuevo);

    // Emito el Personaje porque es un OutPut
    /* this.onNuevoPersonaje.emit(this.nuevo); */

    this.dbzServices.agregarPersonajes(this.nuevo);

    
    this.nuevo = {
      nombre : "",
      poder : 0
    }

  }


}
