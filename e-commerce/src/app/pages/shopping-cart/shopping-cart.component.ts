import { DataService } from './../../shared/service/data.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

export interface ProductElement {
  productName: string;
  img: string;
  productPrice: number;
  quantity: number;
  index: number;
}

const ELEMENT_DATA: ProductElement[] = [];

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {
  displayedColumns: string[] = ['img', 'productName', 'productPrice', 'quantity', 'deleteProduct'];
  dataSource = ELEMENT_DATA;
  cartQuantity: number;
  addNewProduct;

  constructor(
    private productData: DataService
  ) { }

  ngOnInit(): void {
    this.cartQuantity = this.dataSource.length;
    localStorage.setItem('cartQuantity', this.cartQuantity.toString());
    this.recieveProduct();
  }

  recieveProduct(): void {
    console.log('atual lista produto', this.dataSource);
    this.productData.currentProduct.subscribe(addNewProduct => this.addNewProduct = addNewProduct);
    console.log('produto do detalhe', this.addNewProduct);
    if (this.addNewProduct === []) {
      return;
    }else{
      this.dataSource.push(this.addNewProduct);
    }
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
