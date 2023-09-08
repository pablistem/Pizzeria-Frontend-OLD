import { Component, OnInit } from '@angular/core';
import { OrderComponent } from './order/order.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.component.html',
    styleUrls: ['./my-orders.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, OrderComponent]
})
export class MyOrdersComponent implements OnInit {

  constructor() { }

  public isLogged : boolean = true;
  public hasOrders : boolean = true;

  ngOnInit(): void {
  }

}
