import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LeftEventService } from './service/left-event.service';
import { Constants } from './util/constants';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { RightMenuComponent } from './component/header/right-menu/right-menu.component';
import { LeftMenuComponent } from './component/header/left-menu/left-menu.component';
import { HeaderComponent } from './component/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HeaderComponent, LeftMenuComponent, RightMenuComponent, NgClass, RouterOutlet]
})
export class AppComponent implements OnInit {

  constructor(private leftEventService: LeftEventService) {
    this.subscription = this.leftEventService.event.subscribe(
      componente => this.blurActivo = componente != Constants.CLOSE_LEFT_MENU
    );
  }

  title = 'idforideas-idea3';
  blurActivo = false
  subscription: Subscription;


  ngOnInit(): void {
    document.documentElement.style.setProperty('--scrollTop', '0px');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    document.documentElement.style.setProperty('--scrollTop', scrollTop + 'px');
  }

}
