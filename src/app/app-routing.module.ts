import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/auth/login/login.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { BackofficeComponent } from './component/backoffice/backoffice.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/recomendaciones',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'recomendaciones',
        pathMatch: 'full'
      },
      {
        path: 'recomendaciones',
        loadComponent: () => import('./component/home/recomendaciones/recomendaciones.component').then(m => m.RecomendacionesComponent),
        title: 'Recomendaciones'
      },
      {
        path: 'menu/:categoria',
        loadComponent: () => import('./component/home/menu/menu.component').then(m => m.MenuComponent),
        title: 'Menu'
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'backoffice',
    component: BackofficeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
