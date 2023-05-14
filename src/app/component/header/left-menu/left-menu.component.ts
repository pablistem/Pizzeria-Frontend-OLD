import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LeftEventService } from 'src/app/service/left-event.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnDestroy {

  public readonly hamburgerMenu: string = Constants.MENU_HAMBURGER;
  public readonly unregisteredProfile: string = Constants.UNREGISTERED_PROFILE;
  public readonly registeredProfile: string = Constants.REGISTERED_PROFILE;
  public readonly myOrders: string = Constants.MY_ORDERS;
  public readonly coupons: string = Constants.COUPONS;
  public readonly unregisteredDiscount: string = Constants.UNREGISTERED_DISCOUNT;
  public readonly registeredNoDiscount: string = Constants.REGISTERED_NO_DISCOUNT;
  public readonly registeredWithDiscount: string = Constants.REGISTERED_WITH_DISCOUNT;

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
