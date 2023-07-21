import { Component } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  constructor(
    private categoryService: CategoryService
  ) {

  }

  categoriaSeleccionada: string | undefined

  cambioCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria
    switch(categoria) {
      case 'ofertas':
        break;
      case 'pizzas':
        break;
      case 'empanadas':
        break;
      case 'helados':
        break;
      case 'bebidas':
        break;
      default:
        break;
    }
  }

}
