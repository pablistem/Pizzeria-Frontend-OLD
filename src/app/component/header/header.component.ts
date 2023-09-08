import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/service/header-service';
import { LeftEventService } from 'src/app/service/left-event.service';
import { RightEventService } from 'src/app/service/right-event.service';
import { Constants } from 'src/app/util/constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class HeaderComponent implements OnInit, OnDestroy  {

  constructor(
    private rightEventService: RightEventService,
    private leftEventService: LeftEventService,
    private headerService: HeaderService,
    private router: Router
  ) {
    this.headerSubscription = this.headerService.event.subscribe(
      componentName => this.menuClosed(componentName)
    );
    this.leftEventSubscription = this.leftEventService.event.subscribe(
      componentName => this.saveLeftWindow(componentName)
    );
    this.rightEventSubscription = this.rightEventService.event.subscribe(
      componentName => this.saveRightWindow(componentName)
    );
  }

  ngOnInit(): void { }

  private rightMenuIsActive: boolean = false;
  public leftMenuIsActive: boolean = false;
  private headerSubscription: Subscription;
  private leftEventSubscription: Subscription;
  private leftActiveWindow: String = '';
  private rightEventSubscription: Subscription;
  private rightActiveWindow: String = '';

  saveLeftWindow(name: string){
    this.leftActiveWindow = name;
  }

  saveRightWindow(name: string){
    this.leftActiveWindow = name;
  }

  callHamburgerMenu() {
    if (this.rightMenuIsActive) {
      this.closeRightMenu();
    }
    if (this.leftMenuIsActive && this.leftActiveWindow == Constants.MENU_HAMBURGER) {
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
    if (this.rightMenuIsActive && this.rightActiveWindow == Constants.SHOPPING_CART) {
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
    this.headerSubscription.unsubscribe();
    this.leftEventSubscription.unsubscribe();
    this.rightEventSubscription.unsubscribe();
  }

  async redirigirAHome() {
    const respuesta = await this.router.navigateByUrl('/home');
    if (respuesta) {
      window.location.reload();
    }
  }

}
