import { Component } from '@angular/core';
import { LeftEventService } from 'src/app/service/left-event.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {

  constructor(private leftEventService: LeftEventService) { }

  public showProfile(event: Event): void {
    event.preventDefault
    this.leftEventService.sendEvent(Constants.PROFILE);
  }

  public showMyOrders(event: Event): void {
    event.preventDefault;
    this.leftEventService.sendEvent(Constants.MY_ORDERS);
  }

  public showCoupons(event: Event): void {
    event.preventDefault;
    this.leftEventService.sendEvent(Constants.COUPONS);
  }

  public showDiscount(event: Event): void {
    event.preventDefault
    this.leftEventService.sendEvent(Constants.DISCOUNT);
  }

}
