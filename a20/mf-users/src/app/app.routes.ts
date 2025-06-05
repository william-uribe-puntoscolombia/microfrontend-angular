import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./pages/users-list/users-list').then(m => m.UsersList)
  }
];
