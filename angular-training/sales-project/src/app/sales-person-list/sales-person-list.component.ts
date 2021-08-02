import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create a array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("João", "Silva", "joao@email.com", 50000),
    new SalesPerson("John", "Smith", "john@email.com", 40000),
    new SalesPerson("Clara", "Murphy", "claire@email.com", 90000),
    new SalesPerson("Mai", "Wong", "mai@email.com", 60000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
