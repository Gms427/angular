import { Component } from '@angular/core';
import { Config } from './models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  public mostrar_prueba: boolean = true;
  public config;

  constructor(){
    this.title = Config.title;
    this.config = Config; // Así paso la configuración a la vista
  }

  ocultarPrueba(value){
    this.mostrar_prueba = value;
  }
}
