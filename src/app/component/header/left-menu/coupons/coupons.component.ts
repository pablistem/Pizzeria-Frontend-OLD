import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

  constructor() { }

  public isLogged : boolean = true;
  public hasOrders : boolean = true;

  ngOnInit(): void {
  }

}
