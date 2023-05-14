import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() { }

  public moreInfo: boolean = false;

  ngOnInit(): void {
  }

  public showMoreInfo(event: Event): void {
    this.moreInfo = !this.moreInfo;
  }

  public repeat(): void {
    console.log("Repeat");
  }
}
