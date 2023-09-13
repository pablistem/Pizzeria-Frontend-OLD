import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterOutlet]
})
export class HomeComponent {

  constructor() { }

  categoria: string | undefined;

  ngOnInit(): void {

  }

  cambioCategoria(categoria: string) {
    this.categoria = categoria
  }

}
