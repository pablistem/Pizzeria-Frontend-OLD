import { Component, OnInit } from '@angular/core';
import { HamburgerMenuComponent } from '../hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-unregistered-profile',
  templateUrl: './unregistered-profile.component.html',
  styleUrls: ['./unregistered-profile.component.scss']
})
export class UnregisteredProfileComponent implements OnInit {

  hamburgerMenuComponent: HamburgerMenuComponent;
  
  constructor() {
    this.hamburgerMenuComponent = new HamburgerMenuComponent;
  }
  
  ngOnInit(): void {
    
  }
  
  toggleMenu() {
    this.hamburgerMenuComponent.toggleLeftBurguer();
  }

}
