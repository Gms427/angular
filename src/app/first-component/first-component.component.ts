import { Component, OnInit } from '@angular/core';
import { FirstComponent } from '../models/firstComponent';

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
    public arrFirtsComponents: Array<FirstComponent>;
    public props1: String[];
    public color: string;

  constructor() {
      this.color = "black";
      this.props1 = new Array();
      this.arrFirtsComponents = [
          new FirstComponent("Componente gms",427,true),
          new FirstComponent("Componente gms2",428,false),
          new FirstComponent("Componente gms3",426,true)
      ];
  }

  ngOnInit() {
      console.log(this.arrFirtsComponents);
      this.props();
  }

  props(){
      this.arrFirtsComponents.forEach((value,index) =>{
          this.props1.push(value.prop1);
          console.log(index);
      });
      console.log(this.props1);
  }
}
