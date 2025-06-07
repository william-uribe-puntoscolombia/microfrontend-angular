import { Routes, UrlMatcher } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperConfig } from './wrapper/wrapper-config';
import { startsWith } from './starts-with';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Add this route:
  {
    path: 'angular20',
    loadComponent: () =>
      loadRemoteModule('remote-angular20', 'users-list').then((m) => m.UsersList),

  },

  {
    path: 'angular19',
    component: WrapperComponent,
    data: {
      config: {
        // remoteEntry: 'http://localhost:4201/remoteEntry.js', // (opcional, ) Reemplaza con la URL real del remoteEntry.js de mf-users
        remoteName: 'remote-angular19', // El 'name' de tu mf-users en su federation.config.js
        exposedModule: 'users-list-wc', // El módulo expuesto en federation.config.js de mf-users
        elementName: 'users-list-in-remote' // El nombre de la etiqueta del custom element definido en bootstrap.ts de mf-users
      } as WrapperConfig,
    },
  },

  {
    path: 'svelte-mfe',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'svelte-mfe',
        exposedModule: './web-components',
        elementName: 'svelte-mfe',
      } as WrapperConfig,
    },
  },

  {
    path: 'react-mfe',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'react-mfe',
        exposedModule: './web-components',
        elementName: 'react-mfe',
      } as WrapperConfig,
    },
  },


  {
    matcher: startsWith('profile'),
    component: WrapperComponent,
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
    component: NotFoundComponent,
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
