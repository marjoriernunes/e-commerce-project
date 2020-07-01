import { DataService } from './../../shared/service/data.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

export interface ProductElement {
  productName: string;
  imgPath: string;
  productPrice: number;
  quantityStock: number;
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
  showTable: boolean;
  cartQuantity: number;
  addNewProduct;

  constructor(
    private productData: DataService
  ) { }

  ngOnInit(): void {
    this.productData.currentProduct.subscribe(addNewProduct => this.addNewProduct = addNewProduct);
    this.recieveProduct();
  }

  recieveProduct(): void {
    this.productData.currentProduct.subscribe(addNewProduct => this.addNewProduct = addNewProduct);
    if (this.addNewProduct.length === 0) {
      this.showTable = false;
    }else{
      this.showTable = true;
      this.dataSource.push(this.addNewProduct);
      this.cartQuantity = this.dataSource.length;
      localStorage.setItem('cartQuantity', this.cartQuantity.toString());
    }
  }

  removeItem(index): void {
    const array = this.dataSource;
    const newArray = _.remove(array, function(n) {
      return n === index;
    });
    this.dataSource = newArray;
  }

  confirmPurchase() {
    //página de sucesso
  }
}
