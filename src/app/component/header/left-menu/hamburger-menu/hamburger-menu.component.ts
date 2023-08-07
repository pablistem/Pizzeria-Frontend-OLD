import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { HeaderService } from 'src/app/service/header-service';
import { LeftEventService } from 'src/app/service/left-event.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

  constructor(
    private leftEventService: LeftEventService,
    private headerService: HeaderService,
    private authService: AuthService
  ) { }

  isClosed: boolean = false;
  isLoggedIn: boolean | undefined;

  ngOnInit(): void {
    this.isLoggedIn = this.authService.estaLogueado();
  }

  public showProfile(event: Event): void {
    this.leftEventService.sendEvent(Constants.PROFILE);
  }

  public showMyOrders(event: Event): void {
    this.leftEventService.sendEvent(Constants.MY_ORDERS);
  }

  public showCoupons(event: Event): void {
    this.leftEventService.sendEvent(Constants.COUPONS);
  }

  public showDiscount(event: Event): void {
    this.leftEventService.sendEvent(Constants.DISCOUNT);
  }

  public closeMenu(event: Event): void {
    this.headerService.sendEvent(Constants.CLOSE_LEFT_MENU);
  }

  public cerrarSesion() {
    this.authService.limpiarToken()
  }

}
