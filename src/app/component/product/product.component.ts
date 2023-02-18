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

  // Desarrollo cancelado. Antes al abrir ver un panel se actualizaba el parametro de la url
  // private changeUrlProductId(newId: number) {
  //   this.router.navigate([], {
  //     relativeTo: this.route,
  //     queryParams: { id: newId },
  //     queryParamsHandling: 'merge'
  //   });
  // }

  // Funcionalidad de compartir url cancelada por Jere. ¡GRACIAS JERE!
  // shareProduct(productId: number) {
  //   let url = this.router.url;
  //   let params: string = JSON.stringify(this.router.routerState.snapshot.root.queryParams);
  // }

  selectProduct(productId: number) {
    this.urlProductId = productId
    console.log(this.urlProductId);
  }

  toggleProductDetail(index: number){
    this.selectedDetails[index] = !this.selectedDetails[index];
  }

}
