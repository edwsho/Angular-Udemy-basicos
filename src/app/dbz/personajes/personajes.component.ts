import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personajes : Personaje[] = []; 

  get listaPersonajes(){
    return this.dbzService.listaPersonajes;
  }
  
  constructor( private dbzService: DbzServices){

  }
}
