import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Todos los componentes que son comunes dentro de la carpeta Heroes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //El componente que sera expuesto a todo el proyecto
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    imports: [
        CommonModule 
    ]
})
export class HeroesModule{}