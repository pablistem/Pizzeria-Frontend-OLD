import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/service/event.service';
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
  public readonly unregisteredDiscount: string = Constants.UNREGISTERED_DISCOUNT;
  public readonly eventList: string[] = [
    Constants.CLOSE_LEFT_MENU,
    this.hamburgerMenu,
    this.unregisteredProfile,
    this.registeredProfile,
    this.unregisteredDiscount
  ];

  public isHidden: boolean = true;
  public selectedComponent: string = '';

  private subscription: Subscription;

  constructor(private eventService: EventService) {
    this.subscription = this.eventService.event.subscribe(
      componentName => this.toggleFunctionality(componentName)
    );
  }

  private toggleFunctionality(componentName: string) {
    console.log(`LeftMenu recibió evento "${componentName}"`);
    if (!this.eventList.includes(componentName)) {
      console.log(`LeftMenu ignoró el evento`);
      return;
    }
    this.isHidden = (componentName == Constants.CLOSE_LEFT_MENU);
    this.selectedComponent = componentName;
    console.log(`LeftMenu cargó el componente "${this.selectedComponent}"`);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
