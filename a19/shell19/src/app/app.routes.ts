import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: 'usuarios',
    loadComponent: () =>
      loadRemoteModule('mf-users', 'users-list').then((m) => m.UsersList),
  },
];
