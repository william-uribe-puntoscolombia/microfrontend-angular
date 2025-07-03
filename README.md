# Pruebas Microfrontends

Cada folder tiene un shel y remoto en la version de Angular, a20 -> Angular 20

iniciar:

- a20/shell: este se puede ver en localhost:4200
- a20/mf-users: este se puede ver en localhost:4201
- a19/mf-users19: este se puede ver en localhost:4202

## ¿Cómo mockear los servicios localmente?

Utilizamos MSW para mockear los servicios de manera local. Para que funcione se deben hacer primero unas configuraciones que son las siguientes:

### Instalación

Para poder utilizar la librería la debemos instalar primero a partir del siguiente comando.

```sh

bun install msw@1 --save-dev

```

Nos toca instalar la versión 1 porque es la versión que está recomendada para angular, ya que la 2 nos podría generar conflictos.

### Creación de mockServiceWorker.js

La creación de este archivo nos va a permitir que nos identifique los diferentes mocks que vamos a crear, y este archivo se crea a partir del siguiente comando.

```sh

npx msw init ./public --save

```

### Implementar mocks de microfronted y configuración

Creamos un archivo en el cual vamos a implementar los mocks de los microfrontends, en este caso lo llame [load-remote-handlers.ts].

```ts

import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/native-federation';

export async function loadRemoteHandlers() {
  const usersHandlersModule = await loadRemoteModule({
    remoteName: 'remote-angular20',
    exposedModule: './mocks',
  } as LoadRemoteModuleOptions).then((m) => m.handlers);

  return [...usersHandlersModule];
}

```

Hay que tener claro que para que el shell pueda obtener estos mocks deben estar expuestos desde el microfrontend.

Para finalizar debemos llamar estos mocks en la lógica del [bootstrap.ts] para que tenga en cuenta el mockeo de nuestros servicios al iniciar la aplicación de manera local, y eso lo hacemos de la siguiente manera.

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from '@env';
import { setupWorker } from 'msw';

import { App } from './app/app';
import { appConfig } from './app/app.config';
import { loadRemoteHandlers } from './mocks/load-remote-handlers';

async function prepareApp() {
  if (environment.useMockService) {
    const handlers = await loadRemoteHandlers();
    const worker = setupWorker(...handlers);
    return worker.start();
  }

  return Promise.resolve();
}

prepareApp().then(() => {
  bootstrapApplication(App, appConfig).catch((err) => console.error(err));
});

```
