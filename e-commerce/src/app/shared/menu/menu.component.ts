import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  qtde = 4;
  user = true;
  // todo validar login localStorage
  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
    //tirar user localStorage
  }

}
