import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote',
    loadComponent: () => import('./page-remote/page-remote').then(m => m.PageRemote),
  }
];
