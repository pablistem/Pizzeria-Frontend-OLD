import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showLeftBurguer: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLeftBurguer() {
    this.showLeftBurguer = !this.showLeftBurguer;
  }

}
