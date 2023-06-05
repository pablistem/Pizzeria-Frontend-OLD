import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/service/header-service';
import { LeftEventService } from 'src/app/service/left-event.service';
import { RightEventService } from 'src/app/service/right-event.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy  {

  constructor(
    private rightEventService: RightEventService,
    private leftEventService: LeftEventService,
    private headerService: HeaderService
  ) {
    this.subscription = this.headerService.event.subscribe(
      componentName => this.menuClosed(componentName)
    );
  }

  ngOnInit(): void { }

  private rightMenuIsActive: boolean = false;
  private leftMenuIsActive: boolean = false;
  private subscription: Subscription;

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

  menuClosed(name: string) {
    if (name == Constants.CLOSE_LEFT_MENU) {
      this.closeLeftMenu();
    } else if (name == Constants.CLOSE_RIGHT_MENU) {
      this.closeRightMenu();
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
