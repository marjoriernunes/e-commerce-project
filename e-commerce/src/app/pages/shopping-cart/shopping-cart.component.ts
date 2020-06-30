import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

export interface PeriodicElement {
  productName: string;
  img: string;
  productPrice: number;
  quantity: number;
  index: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {img: 'assets/images/products/product-08.jpg', productName: 'aparador', productPrice: 1.0079, quantity: 1, index: 0},
  {img: 'assets/images/products/product-08.jpg', productName: 'aparador', productPrice: 4.0026, quantity: 2, index: 1},
  {img: 'assets/images/products/product-08.jpg', productName: 'aparador', productPrice: 6.941, quantity: 1, index: 2}
];

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {
  displayedColumns: string[] = ['img', 'productName', 'productPrice', 'quantity', 'deleteProduct'];
  dataSource = ELEMENT_DATA;

  cartQuantity: number;

  constructor() { }

  ngOnInit(): void {
    this.cartQuantity = this.dataSource.length;
    localStorage.setItem('cartQuantity', this.cartQuantity.toString());
  }

  removeItem(index) {
    let array = [0, 1, 2];
    let events = _.remove(array, function(n) {
      return n === index;
    });
    console.log(events);
  }

  confirmPurchase() {}

}
