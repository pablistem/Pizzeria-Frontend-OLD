import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCuponComponent } from './cupon/modal-cupon/modal-cupon.component';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

  constructor(private ngbModal : NgbModal) {
    
  }

  isActive = false;
  isActive1 = false;
  isActive2 = false;
  isActive3 = false;
  isActive4 = false;
  isDisabled = true;
  public isLogged : boolean = true;
  public hasOrders : boolean = true;

  ngOnInit(): void {
  }

  toggleActive() {
    this.isActive = !this.isActive;
    this.isActive1 = false;
    this.isActive2 = false;
    this.isActive3 = false;
    this.isActive4 = false;
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
    this.isActive3 = false;
    this.isActive4 = false;
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
    this.isActive3 = false;
    this.isActive4 = false;
    if (this.isActive2 == true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  toggleActive3() {
    this.isActive3 = !this.isActive3;
    this.isActive = false;
    this.isActive1 = false;
    this.isActive2 = false;
    this.isActive4 = false;
    if (this.isActive3 == true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  toggleActive4() {
    this.isActive4 = !this.isActive4;
    this.isActive = false;
    this.isActive1 = false;
    this.isActive2 = false;
    this.isActive3 = false;
    if (this.isActive4 == true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  abrirModal() {
    this.ngbModal.open(ModalCuponComponent);
    }

}
