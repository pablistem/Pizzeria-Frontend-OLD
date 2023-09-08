import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    standalone: true,
    imports: [NgIf]
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
