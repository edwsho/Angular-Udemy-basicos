import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `

    <h1> {{titulo}} </h1>

    <h3>La base es <strong>{{base}}</strong> </h3>

    <button (click)="operarNumero(base)" > + {{base}} </button>

    <span> {{numero}} </span>

    <button (click)="operarNumero(-base)"> - {{base}} </button>
    
    ` })

export class ContadorComponent{

  titulo = 'Contador App';

  numero : number = 10;

  base : number = 5;

   operarNumero(valor: number){

    this.numero += valor;

   }

}