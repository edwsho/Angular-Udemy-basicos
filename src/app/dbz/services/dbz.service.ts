import { Injectable } from "@angular/core";
import { Personaje } from "../interface/dbz.interface";

@Injectable()
export class DbzServices{


    private _listaPersonajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "Vegeta",
          poder: 8500
        }
    
      ]

      get listaPersonajes(): Personaje[] {
          return [...this._listaPersonajes];
      }


      constructor(){
        
    }

    agregarPersonajes(nuevopersonaje: Personaje){
        
        this._listaPersonajes.push(nuevopersonaje);

    }


      

}