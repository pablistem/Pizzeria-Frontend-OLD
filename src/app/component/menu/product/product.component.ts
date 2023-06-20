import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() products: Product[] = [];
  panelOpenState: boolean = false
  urlProductId: number | null = null;
  selectedDetails: boolean[] = [];
  productIdToOpen: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.urlProductId = params['id'];
    });
  }

  onOpenProduct() {
    this.panelOpenState = true;
  }

  onCloseProduct() {
    this.panelOpenState = false;
    this.selectedDetails = [];
  }

  selectProduct(productId: number) {
    this.urlProductId = productId
    console.log(this.urlProductId);
  }

  toggleProductDetail(index: number){
    this.selectedDetails[index] = !this.selectedDetails[index];
  }

}
