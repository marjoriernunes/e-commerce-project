import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  cartQuantity;
  user = true;
  // todo validar login localStorage
  constructor() { }

  ngOnInit(): void {
    this.cartQuantity = parseInt(localStorage.getItem('cartQuantity'), 0);
    if (this.cartQuantity === 0) {
      this.cartQuantity = null;
    }
  }

  logout(): void {
    //tirar user localStorage
  }

}
