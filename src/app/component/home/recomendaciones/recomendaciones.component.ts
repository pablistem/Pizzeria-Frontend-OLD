import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoComponent } from '../producto/producto.component';

@Component({
    selector: 'app-recomendaciones',
    templateUrl: './recomendaciones.component.html',
    styleUrls: ['./recomendaciones.component.scss'],
    standalone: true,
    imports: [CommonModule, ProductoComponent]
})
export class RecomendacionesComponent {

  public repeticiones: number[] = [1, 2, 3, 4, 5, 6];
  public esCelular: boolean = false;

  constructor(
    private router: Router
  ) {
    this.esCelular = window.innerWidth < 1000;
  }

  @HostListener('window:resize', ['$event'])
  private onWindowResize(event: any): void {
    this.esCelular = window.innerWidth < 1000;
  }

  public categoriaSeleccionada(categoria: string): void {
    this.router.navigate(['home/menu', categoria], {
      skipLocationChange: false,
      // state: { estado: contenido }
    })
  }

}
