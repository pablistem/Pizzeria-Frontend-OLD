import { Component } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})

export class HamburgerMenuComponent {

  constructor(private eventService: EventService) { }

  showUnregisteredProfile(event: Event) {
    event.preventDefault
    // this.eventService.sendEvent(Constants.UNREGISTERED_PROFILE);
    this.eventService.sendEvent(Constants.REGISTERED_PROFILE);
  }

  showUnregisteredDiscount(event: Event) {
    event.preventDefault
    this.eventService.sendEvent(Constants.UNREGISTERED_DISCOUNT);
  }

  showRegisteredNoDiscount(event: Event) {
    event.preventDefault
    this.eventService.sendEvent(Constants.REGISTERED_NO_DISCOUNT);
  }

}
