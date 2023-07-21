import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-eliminar-categoria',
  templateUrl: './eliminar-categoria.component.html',
  styleUrls: ['./eliminar-categoria.component.scss']
})
export class EliminarCategoriaComponent implements OnInit {
  constructor(
    private ngbActiveModal: NgbActiveModal,
    private categoryService: CategoryService
  ) { }

  @Input() categoria: Category | undefined;
  errorBackend: string = ''

  ngOnInit(): void { }

  btnCancelar() {
    this.ngbActiveModal.close(false);
  }

  async btnContinuar() {
    const response = await firstValueFrom(this.categoryService.delete(this.categoria?.id!))
      .catch(err => {
        console.error(err)
        this.errorBackend = err
        return
      })
    console.log(response)
    this.btnCancelar()
  }
}
