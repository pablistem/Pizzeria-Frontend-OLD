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
  public isHidden: boolean = true;
  public selectedComponent: string = '';
  private subscription: Subscription;

  constructor(private eventService: EventService) {
    this.subscription = this.eventService.event.subscribe(
      (componentName) => {
        console.log(`RightMenu recibió evento "${componentName}"`);
        this.toggleFunctionality(componentName)
      }
    );
  }

  private toggleFunctionality(componentName: string) {
    this.isHidden = (componentName == Constants.CLOSE_RIGHT_MENU);
    this.selectedComponent = componentName;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
