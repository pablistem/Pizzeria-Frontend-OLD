import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LeftEventService } from 'src/app/service/left-event.service';
import { Constants } from 'src/app/util/constants';
import { DiscountComponent } from './discount/discount.component';
import { ProfileComponent } from './profile/profile.component';
import { CouponsComponent } from './coupons/coupons.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss'],
    standalone: true,
    imports: [NgIf, HamburgerMenuComponent, MyOrdersComponent, CouponsComponent, ProfileComponent, DiscountComponent]
})
export class LeftMenuComponent implements OnDestroy {

  public readonly hamburgerMenu: string = Constants.MENU_HAMBURGER;
  public readonly myOrders: string = Constants.MY_ORDERS;
  public readonly coupons: string = Constants.COUPONS;
  public readonly profile: string = Constants.PROFILE;
  public readonly discount: string = Constants.DISCOUNT;

  public isHidden: boolean = true;
  public selectedComponent: string = '';

  private subscription: Subscription;

  constructor(private leftEventService: LeftEventService) {
    this.subscription = this.leftEventService.event.subscribe(
      componentName => this.toggleFunctionality(componentName)
    );
  }

  private toggleFunctionality(componentName: string) {
    this.isHidden = (componentName == Constants.CLOSE_LEFT_MENU);
    this.selectedComponent = componentName;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
