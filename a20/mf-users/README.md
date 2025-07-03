# Boilerplate

Utilizamos Angular como framework principal.

Comandos:

```sh
# Se recomienda usar el administrador de versiones de paquetes Mise. La versión está en .mise.toml.
# Documentación de instalación de Mise: https://github.com/jdx/mise?tab=readme-ov-file#install-mise

# Instala la versión de bun soportada en el proyecto
$ mise i

# Instalar dependencias. NOTA: En el package.json/engines está la versión de bun/Node a soportada.
$ bun i

# Servidor de desarrollo
$ bun dev

# Build en modo producción
$ bun build:production

# Build en modo staging
$ bun build:staging

# Build en modo desarrollo
$ bun build:development

# Lint del código
$ bun lint

# Lint del código con autofix
$ bun lint:fix

# Formato de estilos
$ bun format:css

# Ejecutar Vitest
$ bun vitest

# Ejecutar Vitest en un directorio específico
$ bun vitest:dir

# Ejecutar Vitest con interfaz de usuario
$ bun vitest:ui

# Ejecutar Vitest con interfaz de usuario y cobertura
$ bun vitest:ui:cov

# Ejecutar Vitest con cobertura
$ bun vitest:cov

# Ejecutar Vitest con cobertura en un directorio específico
$ bun vitest:cov:dir

# Ejecutar Vitest en modo consola sin watch
$ bun vitest:run

# Ejecutar Vitest en modo consola sin watch con cobertura
$ bun vitest:run:cov

# Modo desarrollo auto genera los estilos en los archivos html que tengan un ..tailwind.css compañero.
$ bun tailwind:components:watch

# Genera los estilos en los archivos html que tengan un ..tailwind.css compañero.
$ bun tailwind:componenbts:all
```

## Recomendaciones de desarrollo

- Desarrollo en cada microfrontend
- Antes de publicar cambios, validar que las funcionalidades se vean adecuadamente en el shell.
- Leer toda esta documentación.
- Leer la guía de lineamientos del Frontend.
- Antes de incluir alguna librería nueva, validar que esta esté implementada y compartida en el shell.
- Actualizaciones: todos los microfrontends deben conservar la misma versión del shell; en caso contrario, se debe convertir en WebComponent el microfrontend exportado.

## Tests unitarios

Se utiliza Vitest para las pruebas.

- Vitest está preconfigurado, pero el coverage no funciona correctamente. Se recomienda usar Karma para el coverage hasta que este se genere correctamente con Vitest.
- Cuando esto funcione, retirar todas las librerías de Karma y Jasmine.

## Tests

Se usa Vitest para los tests. Más información sobre su uso:

- [Documentación Vitest](https://vitest.dev/api/expect.html).
- [Documentación Angular testing](https://angular.dev/guide/testing).

### Notas:

- Se agrega una configuración en `tsconfig.spec.json -> vitest/globals` para evitar importar en cada archivo: `import { describe, beforeEach, it, expect } from 'vitest';`.
- Se crea una configuración global en `src/test-setup.ts` para evitar agregar el provider: `providers: [provideZonelessChangeDetection()]`.

## ¿Cómo funciona el estado? (NgRx)

Utilizamos NgRx Signals. En `src/app/core/store/global.ts` se maneja el estado global, que tiene implementada la persistencia y activa las herramientas de debug. Necesitas más información sobre cómo funciona [Signals store](https://ngrx.io/guide/signals/signal-store).

Puedes tomar como referencia `src/app/core/store/global.ts` para crear un estado de componente (si es necesario).

### ¿Cómo funciona el debug?

- [Documentación](https://ngrx-toolkit.angulararchitects.io/docs/with-devtools#disabling-devtools-in-production).
- [Extensión de Chrome](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).

### ¿Cómo persistir datos?

La persistencia de datos en el navegador debe contener el prefijo "pco-[NOMBRE_MICRO]-[STORE]". Ejemplo: `pco-shell-global`. Hay un ejemplo de cómo persistir el estado en el store global `src/app/core/store/global.store.ts`. Ver: `withStorageSync()`.

## Ngx-Permissions

Uso en directivas:

```html
<div class="users-table" *ngxPermissionsOnly="['user:list']"></div>
```

Uso en componentes:

```ts
// Injectar el servicio
permissions = inject(NgxPermissionsService);

// Agregar roles
const roles = ['user:list'];
this.permissions.loadPermissions(roles);

// Obtener roles
console.log('->', this.permissions.getPermissions());
```

Uso en tests:

```ts

```

## Tailwind

Tailwind procesa todos los archivos generando un solo archivo optimizado con todos los estilos. Al usar microfrontends y exponer componentes, estos no contendrían los estilos de las clases de Tailwind. Se crea un script para poder usar los estilos de Tailwind por componente. A continuación se describe cómo usarlos:

```sh
# 1. Crear  MI-COMPONENTE.tailwind.css, ejemplo: list.tailwind.css

# 2. Modificar agregando el nuevo estilo en el componente:
styleUrl: './list.css' -> styleUrls: ['./list.css', './list.tailwind.css']

```

**Notas:**

- En modo desarrollo `bun dev`, un script detecta si existe el ..tailwind.css y le agrega los estilos.
- Opcional compilar todos los htmls: `bun tailwind:componenbts:all`
- Opcional modo watch solo generar los estilos del componente en edición: `bun tailwind:componenbts:all`

## Stack tecnológico

- Linter, Format (ESLint)
- Vitest, Coverage
- TailwindCSS
- Ngx-permissions
- NgRx Signals

## Pendientes

- Vitest: validar funcionamiento del coverage.
- Eliminar Peer dependencies requeridas por NgRx en el package.json.

```json
# Eliminar esta parte:
"overrides": {
  "@angular/core": "20.0.5",
  "@angular/common": "20.0.5"
}
```

- agregar al precommit: tailwind:components:all , format:css
-

- Cuando se implemente el login, no compartir el estado del rol.

- ..

## Checklist para nuevo micro

- en el `package.json` /name, asignar nombre, eje: `pco-users`
- Instalar extensiones.
- Iniciar husky: `bun husky`.
- Cambiar los selectores dependiendo del micro. Ejemplo: `prefix: 'users',` en el `eslint.config.js`.
- En el global store, asignar el nombre del micro en el key de la store: `key: 'pco-[MICRO_KEY]'`. Ejemplo: `key: 'pco-users'`.

## Notas

- Para el uso de environments, se crea una nueva regla en el angular.json, (development-nfe) debido a un error en el build al usar el parámetro `"dev": true`. [Más información](https://github.com/angular-architects/module-federation-plugin/issues/753).

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

### Creación de mocks y configuración

Creamos un archivo en el cual vamos a configurar todos los mocks de los servicios, en la documentación nos recomiendan llamarlo `handlers.ts`.

Un ejemplo de cómo se debe crear los mocks es el siguiente.

```ts

import { environment } from '@env';
import { rest } from 'msw';

export const handlers = [
  rest.get(`${environment.apiUrl}/user`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'abc-123',
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
];

```

También debemos crear un archivo en el cual vamos a asignar todos los mocks creados. En este caso, es como se crea específicamente para Angular o React.

Este archivo en la documentación nos lo recomiendan llamar `browser.ts`, y tanto este archivo como el anterior lo mejor es que estén en la misma carpeta.

```ts

import { setupWorker } from 'msw';

import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

```

Para finalizar con su configuración ese `worker` creado anteriormente debemos meterlo en la lógica del `bootstrap.ts` para que tenga en cuenta el mockeo de nuestros servicios al iniciar la aplicación de manera local, y eso lo hacemos de la siguiente manera.

```ts

import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from '@env';

import { App } from './app/app';
import { appConfig } from './app/app.config';

async function prepareApp() {
  if (environment.useMockService) {
    const { worker } = await import('./api-mock/browser');
    return worker.start();
  }

  return Promise.resolve();
}

prepareApp().then(() => {
  bootstrapApplication(App, appConfig).catch((err) => console.error(err));
});

```

## Tests

Como estamos utilizando `vitest`, los servicios se mockean de una manera un poco diferente a como se venían implementando en Jasmine con Karma. 

Primero se mostrara un ejemplo de un consumo de servicio que localmente estará mockeado y en otros ambientes estara llegando la información desde el backend, y luego cómo se estaría mockeando desde las pruebas.

Ejemplo:

```ts

export class UsersList implements OnInit {
  permissions = inject(NgxPermissionsService);
  userService = inject(UserService);
  usersList = signal<User[]>([]);

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe({
      next: (user: User) => {
        console.log('User data:', user);
        this.usersList.update((users) => [...users, user]);
        console.log(this.usersList());
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      },
    });
  }
}

```

Cómo se mockearia en los test:

- Primero declaramos la variable del servicio. 

```ts

let userServiceMock: Partial<UserService>;

```

- Después iniciamos la variable en él `beforeEach` con las funciones que vayamos a mockear.

```ts

  userServiceMock = {
      getUser: vi.fn().mockReturnValue(of()),
  };

```

- Llamar el mock en los `providers` del test de la siguiente manera.

```ts

  await TestBed.configureTestingModule({
    providers: [provideHttpClient(withInterceptorsFromDi()), { provide: UserService, useValue: userServiceMock }],
  }).compileComponents();

```

Para finalizar, solo se necesitaría llamar el mock donde se necesite y mockearle la respuesta.

Está sería una implementación completa de cómo serían las pruebas de la función mostrada al inicio.

```ts

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '@core/services/user-service';
import { NgxPermissionsAllowStubDirective, NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { of, throwError } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import { getTranslocoModule } from '../../transloco-testing.module';
import { UsersList } from './users-list';

describe('UsersList', () => {
  let component: UsersList;
  let fixture: ComponentFixture<UsersList>;
  let userServiceMock: Partial<UserService>;

  beforeEach(async () => {
    userServiceMock = {
      getUser: vi.fn().mockReturnValue(of()),
    };
    await TestBed.configureTestingModule({
      imports: [UsersList, NgxPermissionsModule.forRoot({}), NgxPermissionsAllowStubDirective, getTranslocoModule()],
      providers: [provideHttpClient(withInterceptorsFromDi()), { provide: UserService, useValue: userServiceMock }],
    }).compileComponents();

    TestBed.inject(NgxPermissionsService).loadPermissions(['user:list']);

    fixture = TestBed.createComponent(UsersList);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.usersList.set([]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test unit function service success', () => {
    (userServiceMock.getUser as Mock).mockReturnValue(of({ id: 'abc-123', firstName: 'John', lastName: 'Naranjo' }));
    component.ngOnInit();
    expect(userServiceMock.getUser).toHaveBeenCalled();
    expect(component.usersList()).toEqual([{ id: 'abc-123', firstName: 'John', lastName: 'Naranjo' }]);
  });

  it('test unit function service error', () => {
    (userServiceMock.getUser as Mock).mockReturnValue(throwError(() => new Error('Error fetching user data')));
    component.ngOnInit();
    expect(userServiceMock.getUser).toHaveBeenCalled();
    expect(component.usersList()).toEqual([]);
  });
});


```





