import { Component } from '@angular/core';

@Component({
  selector: 'miComponente',
  templateUrl: './miComponente.component.html'
   // Template es para definir la vista en linea, es decir, en el propio archivo
})

export class MiComponente {
  public titulo: string;
  public lista: string;
  constructor(){
    this.titulo = "Gms427";
    this.lista = "Listado ";
    console.log("Se cargó el componente");
  }
}
