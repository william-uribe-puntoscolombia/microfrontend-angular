import { Routes } from '@angular/router';
import { provideTranslocoScope } from '@jsverse/transloco';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/users-list/users-list').then((m) => m.UsersList),
  },
];
