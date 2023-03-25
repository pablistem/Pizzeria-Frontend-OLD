import { Component } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private rightMenuIsActive: boolean = false;

  constructor(private eventService: EventService) { }

  callShoppingCart() {
    if (this.rightMenuIsActive) {
      this.eventService.sendEvent(Constants.CLOSE_RIGHT_MENU);
      this.rightMenuIsActive = false;
    } else {
      this.eventService.sendEvent(Constants.SHOPPING_CART);
      this.rightMenuIsActive = true;
    }
  }

}
