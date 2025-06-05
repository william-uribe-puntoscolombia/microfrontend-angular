import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
 // Add this route:
  {
    path: 'usuarios',
    loadComponent: () => {
      return loadRemoteModule('mf-users', 'users-list').then((m) => m.UsersList)

    },
  },

];
