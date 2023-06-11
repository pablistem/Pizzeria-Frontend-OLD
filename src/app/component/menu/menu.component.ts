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

  selectedCategory: number = 0;
  queryParamCategory: string | null = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.queryParamMap.subscribe((params) => {
    //   this.queryParamCategory = params.get('category');
    //   this.determineUrlCategory();
    // })
    // this.lookForOffers();
  }

  // private lookForOffers() {
  //   let offers: Product[] = [];
  //   this.categories?.forEach(category => {
  //     category.products.forEach(product => {
  //       if (product.discount != 0) {
  //         offers.push(product);
  //       }
  //     })
  //   });
  //   this.categories?.push(this.buildOffersCategory(offers));
  // }

  // private buildOffersCategory(offers: Product[]): Category {
  //   let newCategory: Category = {
  //     name: 'Descuentos',
  //     image: '../../../assets/icons/category/percent-solid.svg',
  //     products: offers
  //   };
  //   return newCategory;
  // }

  // private determineUrlCategory() {
  //   if (this.categories && this.queryParamCategory) {
  //     for (let categoryId = 0; categoryId < this.categories.length; categoryId++) {
  //       if (this.equalsIgnoreCase(this.categories[categoryId].name, this.queryParamCategory)) {
  //         this.selectedCategory = categoryId;
  //         break;
  //       }
  //     }
  //   }
  // }

  // private equalsIgnoreCase(str1: string, str2: string): boolean {
  //   return str1.toLowerCase() === str2.toLowerCase();
  // }

  // selectCategory(index: number): void {
  //   if (this.categories) {
  //     this.selectedCategory = index;
  //     this.queryParamCategory = this.categories[index].name;
  //   }
  // }

}
