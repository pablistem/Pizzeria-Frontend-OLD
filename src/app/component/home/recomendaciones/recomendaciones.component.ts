import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.scss']
})
export class RecomendacionesComponent {


  repeticiones: number[] = [1, 2, 3, 4, 5, 6];
  esCelular: boolean = false;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    this.esCelular = window.innerWidth < 1000;
  }

}
