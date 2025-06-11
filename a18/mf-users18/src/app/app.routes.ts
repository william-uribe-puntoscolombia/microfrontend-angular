import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/users-list/users-list.component').then(
        (m) => m.UsersList
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./pages/user-create/user-create.component').then(
        (m) => m.UserCreateComponent
      ),
  },
  {
    path: 'company',
    loadComponent: () =>
      import('./pages/company/company.component').then(
        (m) => m.CompanyComponent
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
