import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Prueba } from '../models/prueba';

@Component({
  selector: 'prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit, DoCheck, OnDestroy {
  public content: string;

  constructor() {
    console.log("Se ejecutó el constructor");
    this.content = "Contenido asd";
  }

  ngOnInit() {
    console.log("OnInit ejecutado");
  }

  ngDoCheck(){
    console.log("DoCheck ejecutado");
  }

  ngOnDestroy(){
    console.log("OnDestroy ejecutado");
  }

  changeContent(){
    this.content = "Contenido nuevo";
  }

}
