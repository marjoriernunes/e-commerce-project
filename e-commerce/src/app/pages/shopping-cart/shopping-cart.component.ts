import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  productName: string;
  img: string;
  productPrice: number;
  quantity: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {img: 'assets/images/products/product-08.jpg', productName: 'aparador', productPrice: 1.0079, quantity: 1},
  {img: 'assets/images/products/product-08.jpg', productName: 'aparador', productPrice: 4.0026, quantity: 2},
  {img: 'assets/images/products/product-08.jpg', productName: 'aparador', productPrice: 6.941, quantity: 1}
];

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {
  displayedColumns: string[] = ['img', 'productName', 'productPrice', 'quantity'];
  dataSource = ELEMENT_DATA;

  cartQuantity: number;

  constructor() { }

  ngOnInit(): void {
    this.cartQuantity = this.dataSource.length;
    localStorage.setItem('cartQuantity', this.cartQuantity.toString());
  }

  confirmPurchase() {}

}
