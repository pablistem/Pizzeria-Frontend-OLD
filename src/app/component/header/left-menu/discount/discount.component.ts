import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {

  constructor() { }

  isActive = false;
  isActive1 = false;
  isActive2 = false;
  isDisabled = true;
  public isRegistered: boolean = true;
  public hasDiscounts: boolean = true;

  ngOnInit(): void {
  }

  toggleActive() {
    this.isActive = !this.isActive;
    this.isActive1 = false;
    this.isActive2 = false;
    if (this.isActive == true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  toggleActive1() {
    this.isActive1 = !this.isActive1;
    this.isActive = false;
    this.isActive2 = false;
    if (this.isActive1 == true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  toggleActive2() {
    this.isActive2 = !this.isActive2;
    this.isActive = false;
    this.isActive1 = false;
    if (this.isActive2 == true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

}
