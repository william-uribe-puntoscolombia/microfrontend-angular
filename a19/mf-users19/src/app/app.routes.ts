import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuarios',
    loadComponent: () => import('./pages/users-list/users-list.component').then(m => m.UsersList)
  }
];
