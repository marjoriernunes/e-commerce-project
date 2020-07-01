import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private productSource = new BehaviorSubject([]);
  currentProduct = this.productSource.asObservable();

  constructor() { }

  addProduct(addNewProduct: any): void {
    this.productSource.next(addNewProduct);
  }

}
