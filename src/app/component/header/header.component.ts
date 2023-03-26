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
  private leftMenuIsActive: boolean = false;

  constructor(private eventService: EventService) { }

  callHamburgerMenu(){
    if (this.rightMenuIsActive) {
      this.closeRightMenu();
    }
    if (this.leftMenuIsActive) {
      this.closeLeftMenu();
    } else {
      this.eventService.sendEvent(Constants.MENU_HAMBURGER);
      this.leftMenuIsActive = true;
    }
  }

  callShoppingCart() {
    if (this.leftMenuIsActive) {
      this.closeLeftMenu();
    }
    if (this.rightMenuIsActive) {
      this.closeRightMenu();
    } else {
      this.eventService.sendEvent(Constants.SHOPPING_CART);
      this.rightMenuIsActive = true;
    }
  }

  private closeRightMenu(){
    this.eventService.sendEvent(Constants.CLOSE_RIGHT_MENU);
    this.rightMenuIsActive = false;
  }

  private closeLeftMenu(){
    this.eventService.sendEvent(Constants.CLOSE_LEFT_MENU);
    this.leftMenuIsActive = false;
  }



}
