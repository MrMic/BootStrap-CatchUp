import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  imports: [CommonModule],
  templateUrl: './sales-person-list.html',
  styleUrl: './sales-person-list.css',
})
export class SalesPersonList {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup.kumar@luv2code.com', 50000),
    new SalesPerson('John', 'Doe', 'john.doe@luv2code.com', 40000),
    new SalesPerson('Claire', 'Murphy', 'claire.murphy@luv2code.com', 90000),
    new SalesPerson('Mai', 'Truong', 'mai.truong@luv2code.com', 60000),
  ];
}
