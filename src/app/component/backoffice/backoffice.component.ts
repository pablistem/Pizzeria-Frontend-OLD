import { Component, OnInit } from '@angular/core';
import { ProductoBOComponent } from './producto-bo/producto-bo.component';
import { CategoryBOComponent } from './category-bo/category-bo.component';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
    selector: 'app-backoffice',
    templateUrl: './backoffice.component.html',
    styleUrls: ['./backoffice.component.scss'],
    standalone: true,
    imports: [NgIf, NgSwitch, NgSwitchCase, CategoryBOComponent, ProductoBOComponent, NgSwitchDefault]
})
export class BackofficeComponent implements OnInit {

  constructor() { }

  selectedEntity: string | undefined;

  ngOnInit(): void {
  }

}
