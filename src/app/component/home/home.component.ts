import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
