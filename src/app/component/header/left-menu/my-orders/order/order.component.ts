import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LeftEventService } from 'src/app/service/left-event.service';
import { Constants } from 'src/app/util/constants';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  public isHidden: boolean = true;
  public selectedComponent: string = '';
  private subscription: Subscription;

  constructor(private leftEventService: LeftEventService) {
    this.subscription = this.leftEventService.event.subscribe(
      componentName => this.toggleFunctionality(componentName)
    );
  }

  private toggleFunctionality(componentName: string) {
    this.isHidden = (componentName == Constants.CLOSE_LEFT_MENU);
    this.selectedComponent = componentName;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public showOrderDetail(event: Event): void {
    this.leftEventService.sendEvent(Constants.ORDER_DETAIL);
  }

  public repeat(): void {
    console.log("Repeat");
  }
}
