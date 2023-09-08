import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html',
    styleUrls: ['./categorias.component.scss'],
    standalone: true,
    imports: [NgIf]
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
