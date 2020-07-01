import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductList } from './../../../shared/mock/products-list/product-list';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
import * as _ from 'lodash';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnChanges {
  searchForm: FormGroup;
  searchControl: FormControl;
  searchFilter = [];
  products = [];

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.products = ProductList;
    this.search();
  }

  ngOnChanges(): void {
    this.search();
  }

  search() {
    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        tap(searchTerm => {
          if (searchTerm.length === 0) {
            this.searchFilter = ProductList;
          } else {
            this.searchFilter = _.filter(this.products, x => {
              const dataStr = Object.keys(x)
                .reduce((currentTerm: string, key: string) => {
                  return currentTerm + (x as { [key: string]: any })[key] + '◬';
                }, '')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase();
              const transformedFilter = searchTerm
                .trim()
                .normalize('NFD')
                .replace(/[^\w\s]/gi, '')
                .toLowerCase();
              return dataStr.indexOf(transformedFilter) !== -1;
            });
          }
          this.products = this.searchFilter;
        })
      )
      .subscribe();
  }

  productDetails(id): void {
    this.router.navigate(['/detalhes-do-produto', id]);
  }

}
