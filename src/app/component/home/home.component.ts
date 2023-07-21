import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  repeticiones: number[] = [1, 2, 3, 4, 5, 6];
  esCelular: boolean = false;

  ngOnInit(): void {
  }


  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    this.esCelular = window.innerWidth < 1000;
  }

}
