import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'idforideas-idea3';

  ngOnInit(): void {
    document.documentElement.style.setProperty('--scrollTop', '0px');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    document.documentElement.style.setProperty('--scrollTop', scrollTop + 'px');
  }

}
