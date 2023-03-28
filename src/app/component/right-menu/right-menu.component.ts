import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/service/event.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnDestroy {

  public readonly shoppingCart: string = Constants.SHOPPING_CART;
  public readonly eventList: string[] = [
    Constants.CLOSE_RIGHT_MENU,
    this.shoppingCart
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
    console.log(`RightMenu recibió evento "${componentName}"`);
    if (!this.eventList.includes(componentName)) {
      console.log(`RightMenu ignoró el evento`);
      return;
    }
    this.isHidden = (componentName == Constants.CLOSE_RIGHT_MENU);
    this.selectedComponent = componentName;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
