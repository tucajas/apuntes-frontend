import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent:() => import('./apuntes/home/home.component'),
  },
  {
    path: 'agregar',
    loadComponent: () => import('./apuntes/agregar/agregar.component'),
  },
  {
    path: 'listado',
    loadComponent: () => import('./apuntes/listado/listado.component'),
  },
  {
    path: 'apunte',
    loadComponent: () => import('./apuntes/home/home.component'),
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./apuntes/agregar/agregar.component'),
  },
];
