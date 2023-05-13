import { Component } from '@angular/core';

@Component({
  selector: 'app-registered-with-discount',
  templateUrl: './registered-with-discount.component.html',
  styleUrls: ['./registered-with-discount.component.scss']
})
export class RegisteredWithDiscountComponent {

  constructor() { }

  isActive = false;
  isActive1 = false;
  isActive2 = false;
  isDisabled = true;
  
  toggleActive() {
    this.isActive = !this.isActive;
    this.isActive1 = false;
    this.isActive2 = false;
    if (this.isActive==true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  toggleActive1() {
    this.isActive1 = !this.isActive1;
    this.isActive = false;
    this.isActive2 = false;
    if (this.isActive1==true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  toggleActive2() {
    this.isActive2 = !this.isActive2;
    this.isActive = false;
    this.isActive1 = false;
    if (this.isActive2==true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }
}
