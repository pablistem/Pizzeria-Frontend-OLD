import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Product } from 'src/app/model/product';

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
          description: 'Una grande de muza',
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
          description: 'Una grande de muza',
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
          description: 'Una grande de muza',
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
          description: 'Super deliciosas',
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
          description: 'Super deliciosas',
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
          description: 'Super deliciosas',
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
          description: 'fria y refrescante',
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
          description: 'fria y refrescante',
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
          description: 'fria y refrescante',
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
          description: 'Con doble chocolate',
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
          name: 'Torta',
          description: 'Con doble chocolate',
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
          description: 'Con doble chocolate',
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
  ];

  selectedCategory: number = 0;
  queryParamCategory: string | null = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.queryParamCategory = params.get('category');
      this.determineUrlCategory();
    })
    this.lookForOffers();
  }

  private lookForOffers() {
    let offers: Product[] = [];
    this.categories?.forEach(category => {
      category.products.forEach(product => {
        if (product.discount != 0) {
          offers.push(product);
        }
      })
    });
    this.categories?.push(this.buildOffersCategory(offers));
  }

  private buildOffersCategory(offers: Product[]): Category {
    let newCategory: Category = {
      name: 'Descuentos',
      image: '../../../assets/icons/category/percent-solid.svg',
      products: offers
    };
    return newCategory;
  }

  private determineUrlCategory() {
    if (this.categories && this.queryParamCategory) {
      for (let categoryId = 0; categoryId < this.categories.length; categoryId++) {
        if (this.equalsIgnoreCase(this.categories[categoryId].name, this.queryParamCategory)) {
          this.selectedCategory = categoryId;
          break;
        }
      }
    }
  }

  private equalsIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
  }

  selectCategory(index: number): void {
    if (this.categories) {
      this.selectedCategory = index;
      this.queryParamCategory = this.categories[index].name;
    }
  }

}
