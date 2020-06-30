import { Component, OnInit } from '@angular/core';
import { ProductList } from './../../shared/mock/products-list/product-list';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  data = [];
  showProduct = [];
  quantityCounter: number;
  maxStock: number;
  message: string;

  constructor() { }

  ngOnInit(): void {
    this.data = ProductList;
    this.quantityCounter = 0;
    this.maxStock = 2;
    const urlId = location.pathname.split('/')[2];
    this.getProduct(urlId);
  }

  getProduct(id): void {
    const selectedProduct = this.data.filter((product) => {
      return product.id === parseInt(id, 0);
    });
    this.showProduct = selectedProduct;
  }

  decreaseCounter(): void {
    if (this.quantityCounter === 0) {
      return;
    } else {
      this.quantityCounter = this.quantityCounter - 1;
      this.message = '';
    }
  }

  increaseCounter(): void {
    if (this.quantityCounter === this.maxStock) {
      this.message = 'Ops! Temos apenas ' + this.maxStock + ' itens disponíveis no estoque :/';
      return;
    } else {
      this.quantityCounter = this.quantityCounter + 1;
      this.message = '';
    }
  }

  addToCart() {

  }
}
