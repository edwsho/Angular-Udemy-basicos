import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Wolverine','DeadPool','Thor'];
  
  heroeEraserTAG: string = '';

  mostrarDiv : boolean = false;

  borrarHeroe():void{
    const heroeBorrado = this.heroes.shift() ||'';
    this.heroeEraserTAG = heroeBorrado;
  }
}
