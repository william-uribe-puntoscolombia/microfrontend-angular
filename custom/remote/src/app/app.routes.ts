import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote',
    loadComponent: () => import('./users/users').then(m => m.Users),
    children:[
      {
        path: 'subpage',
        loadComponent: () => import('./subpage/subpage').then(m => m.Subpage)
      }
    ]
  },
];
