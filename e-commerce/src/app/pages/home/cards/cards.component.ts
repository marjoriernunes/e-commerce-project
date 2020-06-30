import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductList } from './../../../shared/mock/products-list/product-list';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  products = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.products = ProductList;
  }

  productDetails(id): void {
    this.router.navigate(['/detalhes-do-produto', id]);
  }

}
