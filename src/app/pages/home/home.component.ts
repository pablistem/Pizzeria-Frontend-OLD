import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public categoryList: string[] = [
    'postres',
    'bebidas',
    'empanadas',
    'pizza',
    'descuentos'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
