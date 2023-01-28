import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: Category[] | null = [
    {
      name: 'Pizza',
      image: '../../../assets/icons/category/pizza-slice-solid.svg',
      products: [
        {
          name: 'Napolitana',
          price: 2000,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Queso extra'
            },
            {
              name: '12 porciones'
            },
          ],
          discount: 0
        },
        {
          name: 'Calabresa',
          price: 2200,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Queso extra'
            },
            {
              name: '12 porciones'
            },
          ],
          discount: 0
        },
        {
          name: 'Fugazzeta',
          price: 1800,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Queso extra'
            },
            {
              name: '12 porciones'
            },
          ],
          discount: 0
        },
      ]
    },
    {
      name: 'Empanadas',
      image: '../../../assets/icons/category/moon-solid.svg',
      products: [
        {
          name: 'Pollo',
          price: 200,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Picante'
            },
            {
              name: 'Extra picante'
            },
          ],
          discount: 0
        },
        {
          name: 'Carne',
          price: 220,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Picante'
            },
            {
              name: 'Extra picante'
            },
          ],
          discount: 0
        },
        {
          name: 'Humita',
          price: 180,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Picante'
            },
            {
              name: 'Extra picante'
            },
          ],
          discount: 10
        },
      ]
    },
    {
      name: 'Bebidas',
      image: '../../../assets/icons/category/champagne-glasses-solid.svg',
      products: [
        {
          name: 'Coca-cola',
          price: 1000,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: '500ml'
            },
            {
              name: '1000ml'
            },
          ],
          discount: 0
        },
        {
          name: 'Pepsi',
          price: 900,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: '500ml'
            },
            {
              name: '1000ml'
            },
          ],
          discount: 0
        },
        {
          name: 'Fanta',
          price: 900,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: '500ml'
            },
            {
              name: '1000ml'
            },
          ],
          discount: 15
        },
      ]
    },
    {
      name: 'Postres',
      image: '../../../assets/icons/category/ice-cream-solid.svg',
      products: [
        {
          name: 'Helado',
          price: 1500,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Glaseado de chocolate'
            },
            {
              name: 'Glaseado de frutilla'
            },
          ],
          discount: 0
        },
        {
          name: 'Torta',
          price: 1900,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Con chispas de chocolate'
            },
            {
              name: 'Bañada de Rockets'
            },
          ],
          discount: 0
        },
        {
          name: 'Cheesecake',
          price: 1200,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Fresa'
            },
            {
              name: 'Frutilla'
            },
          ],
          discount: 0
        },
      ]
    },
    {
      name: 'Descuentos',
      image: '../../../assets/icons/category/percent-solid.svg',
      products: [
        {
          name: 'Helado',
          price: 1500,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Glaseado de chocolate'
            },
            {
              name: 'Glaseado de frutilla'
            },
          ],
          discount: 20
        },
        {
          name: 'Fanta',
          price: 900,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: '500ml'
            },
            {
              name: '1000ml'
            },
          ],
          discount: 15
        },
        {
          name: 'Humita',
          price: 180,
          image: 'https://source.unsplash.com/random',
          details: [
            {
              name: 'Picante'
            },
            {
              name: 'Extra picante'
            },
          ],
          discount: 10
        },
      ]
    },
  ];
  selectedCategory: number = 0;
  queryParamCategory: string | null = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.queryParamCategory = params.get('category');
      console.log(`ngOnInit() -> ${this.queryParamCategory}`);
    })
  }

  selectCategory(index: number): void {
    if (this.categories) {
      this.selectedCategory = index;
      console.log(`selectCategory() -> ${this.categories[index].name}`);
      this.queryParamCategory = this.categories[index].name;
    }
  }

}
