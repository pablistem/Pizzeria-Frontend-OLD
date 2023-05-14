import { Component } from '@angular/core';
import { LeftEventService } from 'src/app/service/left-event.service';
import { RightEventService } from 'src/app/service/right-event.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private rightMenuIsActive: boolean = false;
  private leftMenuIsActive: boolean = false;

  constructor(
    private rightEventService: RightEventService,
    private leftEventService: LeftEventService,
  ) { }

  callHamburgerMenu() {
    if (this.rightMenuIsActive) {
      this.closeRightMenu();
    }
    if (this.leftMenuIsActive) {
      this.closeLeftMenu();
    } else {
      this.leftEventService.sendEvent(Constants.MENU_HAMBURGER);
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
      this.rightEventService.sendEvent(Constants.SHOPPING_CART);
      this.rightMenuIsActive = true;
    }
  }

  private closeRightMenu() {
    this.rightEventService.sendEvent(Constants.CLOSE_RIGHT_MENU);
    this.rightMenuIsActive = false;
  }

  private closeLeftMenu() {
    this.leftEventService.sendEvent(Constants.CLOSE_LEFT_MENU);
    this.leftMenuIsActive = false;
  }

}
