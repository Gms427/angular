import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
   public categories: Array<Category>;

  constructor(){
     this.categories = [
         new Category("Cat 1",["Report 1.1", "Report 1.2"]),
         new Category("Cat 2",["Report 2.1", "Report 2.2","Report 2.3"]),
         new Category("Cat 3",["Report 3.1", "Report 3.2"])
     ];
  }
}
