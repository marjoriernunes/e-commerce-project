import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  cartQuantity;
  user: string;
  // todo validar login localStorage
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.cartQuantity = parseInt(localStorage.getItem('cartQuantity'), 0);
    if (this.cartQuantity === 0) {
      this.cartQuantity = null;
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

}
