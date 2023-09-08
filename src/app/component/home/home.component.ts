import { Component, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [NgIf, CategoriasComponent, RecomendacionesComponent, MenuComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  categoria: string | undefined;

  ngOnInit(): void {
  }

  categoriaListener(categoria: string) {
    this.categoria = categoria;
  }

}
