import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { MenuPage } from 'src/app/model/menu-page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  panelOpenState = false;
  categoryList: string[] = [
    'postres',
    'bebidas',
    'empanadas',
    'pizza',
    'descuentos'
  ];
  category: string | null = null;
  menuPages: MenuPage[] = [
    {
      name: 'pizzas',
      image: ''
    },
    {
      name: 'empanadas',
      image: ''
    },
    {
      name: 'bebidas',
      image: ''
    },
    {
      name: 'postres',
      image: ''
    },
    {
      name: 'descuentos',
      image: ''
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
      console.log(this.category);
    })
  }

  switchMenuPage(index: number): void {
    console.log(this.menuPages[index]);
  }

}
