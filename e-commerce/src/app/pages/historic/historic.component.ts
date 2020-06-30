import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  productName: string;
  img: string;
  productPrice: number;
  quantity: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {img: 'assets/images/products/product-08.jpg', productName: 'aparador', productPrice: 1.0079, quantity: 1, date: '28/6/2020'},
  {img: 'assets/images/products/product-08.jpg', productName: 'aparador', productPrice: 4.0026, quantity: 2, date: '28/6/2020'},
  {img: 'assets/images/products/product-08.jpg', productName: 'aparador', productPrice: 6.941, quantity: 1, date: '28/6/2020'}
];


@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {
  displayedColumns: string[] = ['img', 'productName', 'productPrice', 'quantity', 'date'];
  dataSource = ELEMENT_DATA;

  cartQuantity: number;

  constructor() { }

  ngOnInit(): void {
  }

}
