import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

  showLeftBurguer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLeftBurguer() {
    this.showLeftBurguer = !this.showLeftBurguer;
  }

}