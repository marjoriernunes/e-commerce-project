import { DataService } from './../../shared/service/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductList } from './../../shared/mock/products-list/product-list';
import { Router } from '@angular/router';

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
  disabledButton = false;
  addNewProduct;

  constructor(
    private router: Router,
    private productData: DataService
  ) { }

  ngOnInit(): void {
    this.productData.currentProduct.subscribe(addNewProduct => this.addNewProduct = addNewProduct);
    this.data = ProductList;
    this.quantityCounter = 0;
    const urlId = location.pathname.split('/')[2];
    this.getProduct(urlId);
    if (this.maxStock === 0) {
      this.disabledButton = true;
      this.message = 'Este produto está esgotado no momento';
    }
  }

  getProduct(id): void {
    const selectedProduct = this.data.filter((product) => {
      return product.id === parseInt(id, 0);
    });
    this.showProduct = selectedProduct;
    console.log(this.showProduct);
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
      this.message = 'Ops! Não temos mais unidades disponíveis no estoque :/';
      return;
    } else {
      this.quantityCounter = this.quantityCounter + 1;
      this.message = '';
    }
  }

  addToCart(): void {
    const userActive = localStorage.getItem('user');
    if (userActive !== null) {
      this.productData.addProduct(this.showProduct);
      this.router.navigate(['/carrinho-de-compras']);
    } else {
      this.disabledButton = true;
      this.message = 'Você precisa fazer seu login para adicionar o produto ao carrinho de compras';
    }
  }
}
