import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) {

  }


  @Output() categoriaEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Input() categoria: string | undefined;

  ngOnInit(): void {

  }

  cambioCategoria(categoria: string) {
    this.categoria = categoria
    this.categoriaEmitter.emit(categoria);
  }

}
