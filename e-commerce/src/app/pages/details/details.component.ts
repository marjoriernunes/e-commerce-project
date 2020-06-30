import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  quantityCounter: number;
  maxStock: number;
  message: string;

  constructor() { }

  ngOnInit(): void {
    this.quantityCounter = 0;
    this.maxStock = 2;
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
}
