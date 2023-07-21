import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { CrearCategoriaComponent } from "./crear-categoria/crear-categoria.component";

@Component({
  selector: 'app-category-bo',
  templateUrl: './category-bo.component.html',
  styleUrls: ['./category-bo.component.scss']
})
export class CategoryBOComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private ngbModal: NgbModal
  ) { }

  categorias: Category[] = [];

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  private obtenerCategorias() {
    this.categoryService.getAll().subscribe({
      next: (value) => {
        this.categorias = value.categories
      },
      error: (err) => {
        console.error(err);
      },
    })
  }

  btnCrear() {
    this.ngbModal.open(CrearCategoriaComponent);
  }

  btnActualizar() {

  }

  btnEliminar() {

  }

}
