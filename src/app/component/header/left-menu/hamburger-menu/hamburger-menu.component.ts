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

  showUnregisteredProfile(event: Event) {
    event.preventDefault
    // this.eventService.sendEvent(Constants.UNREGISTERED_PROFILE);
    this.leftEventService.sendEvent(Constants.REGISTERED_PROFILE);
  }

  public showMyOrders(event: Event): void {
    event.preventDefault;
    this.leftEventService.sendEvent(Constants.MY_ORDERS);
  }

  public showCoupons(event: Event): void {
    event.preventDefault;
    this.leftEventService.sendEvent(Constants.COUPONS);
  }
  showUnregisteredDiscount(event: Event) {
    event.preventDefault
    this.leftEventService.sendEvent(Constants.UNREGISTERED_DISCOUNT);
  }

  showRegisteredNoDiscount(event: Event) {
    event.preventDefault
    this.leftEventService.sendEvent(Constants.REGISTERED_NO_DISCOUNT);
  }

  showRegisteredWithDiscount(event: Event) {
    event.preventDefault
    this.leftEventService.sendEvent(Constants.REGISTERED_WITH_DISCOUNT);
  }
}
