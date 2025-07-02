import { Routes } from '@angular/router';
import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/native-federation';

import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { startsWith } from './starts-with';
import { Wrapper } from './wrapper/wrapper';
import { WrapperConfig } from './wrapper/wrapper-config-type';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },

  // Add this route:
  {
    path: 'angular20',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'remote-angular20',
        exposedModule: './app.routes',
      } as LoadRemoteModuleOptions).then((m) => m.routes),
  },

  {
    path: 'angular19',
    component: Wrapper,
    data: {
      config: {
        remoteName: 'remote-angular19', // Shell: Es el name que esta en el federation.manifest.json
        exposedModule: './UsersList', // Remoto: El nombre del elemento expuesto en el remoto (exposes{...} federation.config.js del remoto)
        elementName: 'app-users-list-webcomp', // Remoto: El nombre del WebComponent(DOM Element) ver:(src/app/pages/users-list/users-list.webcomponent.ts)
      } as WrapperConfig,
    },
  },

  {
    matcher: startsWith('angular18'),
    component: Wrapper,
    data: {
      config: {
        remoteName: 'mfa18', // Shell: Es el name que esta en el federation.manifest.json
        exposedModule: './web-component', // Remoto: El nombre del elemento expuesto en el remoto (exposes{...} federation.config.js del remoto)
        elementName: 'app-users-mf18', // Remoto: El nombre del WebComponent(DOM Element) ver:(src/app/pages/users-list/users-list.webcomponent.ts)
      } as WrapperConfig,
    },
  },
  {
    path: 'svelte-mfe',
    component: Wrapper,
    data: {
      config: {
        remoteName: 'svelte-mfe',
        exposedModule: './web-components',
        elementName: 'svelte-mfe',
      } as WrapperConfig,
    },
  },

  // Resuelve conflictos en urls, que el remote y el padre tengan igual
  {
    matcher: startsWith('profile'),
    component: Wrapper,
    data: {
      config: {
        remoteName: 'mfe3',
        exposedModule: './web-components',
        elementName: 'mfe3-root',
      } as WrapperConfig,
    },
  },

  {
    path: '**',
    component: NotFound,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

//------------------
// import { loadRemoteModule } from '@angular-architects/native-federation';
// import { Routes } from '@angular/router';
// import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

// export const routes: Routes = [
//  // Add this route:
//   // {
//   //   path: 'usuarios',
//   //   loadComponent: () => {
//   //     return loadRemoteModule('mf-users', 'users-list').then((m) => m.UsersList)
//   //   },
//   // },
//   {
//     path: 'users-list-mfe', // La ruta en el shell donde quieres mostrar el MFE
//     component: WebComponentWrapper,
//     data: {
//       // Opciones para WebComponentWrapper
//       remoteEntry: 'http://localhost:4201/remoteEntry.js', // Reemplaza con la URL real del remoteEntry.js de mf-users
//       remoteName: 'mf-users', // El 'name' de tu mf-users en su federation.config.js
//       exposedModule: './users-list-wc', // El módulo expuesto en federation.config.js de mf-users
//       elementName: 'users-list-element' // El nombre de la etiqueta del custom element definido en bootstrap.ts de mf-users
//     } as WebComponentWrapperOptions
//   },

// ];
