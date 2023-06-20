import { Component, OnInit } from '@angular/core';
import { CategoryBOService } from 'src/app/service/category-bo.service';

@Component({
  selector: 'app-category-bo',
  templateUrl: './category-bo.component.html',
  styleUrls: ['./category-bo.component.scss']
})
export class CategoryBOComponent implements OnInit {

  constructor(
    private categoryService : CategoryBOService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.error(err);
      },
    })
  }

  accion(accion: string) {
    switch (accion) {
      case 'crear':

        break;
      case 'actualizar':

        break;
      case 'eliminar':

        break;
      default:
        alert('Soy un pelotudo');
        break;
    }
  }

}
