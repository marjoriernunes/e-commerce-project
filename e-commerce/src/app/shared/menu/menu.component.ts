import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  qtde = 4;
  user = null;
  // todo validar login localStorage
  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
    //tirar user localStorage
  }

}
