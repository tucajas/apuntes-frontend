import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'login',
    loadComponent:()=>import('./auth/login/login.component'),
  },
  {
    path:'registrar',
    loadComponent:()=>import('./auth/registration/registration.component'),
  },
  {
    path: '',
    loadComponent:() => import('./apuntes/home/home.component'),
  },
  {
    path:'home',
    loadComponent:()=> import('./apuntes/home/home.component'),
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
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
