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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.urlProductId = params['id'];
      console.log(`Se debería abrir el producto "${this.urlProductId}" de la categoría "${params['category']}"`);
    });
  }

  onOpenProduct(productId: number) {
    this.panelOpenState = true;
    this.changeUrlProductId(productId);
  }

  onCloseProduct(productId: number) {
    this.panelOpenState = false;
    console.log(`El productId de onCloseProduct es ${productId}`);
    this.changeUrlProductId(null);
  }

  private changeUrlProductId(newId : number | null){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { id: newId },
      queryParamsHandling: 'merge'
    });
  }

}
