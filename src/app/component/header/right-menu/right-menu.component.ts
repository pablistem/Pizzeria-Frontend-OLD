import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RightEventService } from 'src/app/service/right-event.service';
import { Constants } from 'src/app/util/constants';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-right-menu',
    templateUrl: './right-menu.component.html',
    styleUrls: ['./right-menu.component.scss'],
    standalone: true,
    imports: [NgIf, ShoppingCartComponent]
})
export class RightMenuComponent implements OnDestroy {

  public readonly shoppingCart: string = Constants.SHOPPING_CART;


  public isHidden: boolean = true;
  public selectedComponent: string = '';

  private subscription: Subscription;

  constructor(private rightEventService: RightEventService) {
    this.subscription = this.rightEventService.event.subscribe(
      componentName => this.toggleFunctionality(componentName)
    );
  }

  private toggleFunctionality(componentName: string) {
    this.isHidden = (componentName == Constants.CLOSE_RIGHT_MENU);
    this.selectedComponent = componentName;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
