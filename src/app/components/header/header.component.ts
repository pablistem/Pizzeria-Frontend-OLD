import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showLeftBurguer: boolean = false;
  showRightBurguer: boolean = false;

  toggleLeftBurguer() {
    this.showLeftBurguer = !this.showLeftBurguer;
  }

  toggleRightBurguer() {
    this.showRightBurguer = !this.showRightBurguer;
  }

}
