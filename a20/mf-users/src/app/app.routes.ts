import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadComponent: () => import('./pages/users-list/users-list').then((m) => m.UsersList),
      },
      {
        path: 'form',
        loadComponent: () => import('./pages/reactive-form/reactive-form').then((m) => m.ReactiveForm),
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
