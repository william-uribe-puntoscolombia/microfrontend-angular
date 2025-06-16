# Microfrontend base

```bash
npm run start
```

En Angular.json esta el puerto ejemplo `http://localhost:4201/`

## Tests

Correr tests con:

```bash
npm run test
```

```ts
// Requiere imports
import { describe, beforeEach, it, expect } from 'vitest';

// Requiere agregar el provider `provideZonelessChangeDetection`:
beforeEach(async () => {
  await TestBed.configureTestingModule({
    ...
    providers: [provideZonelessChangeDetection()] // <-- aqui
  }).compileComponents();
});
```

## Ngx-Permissions

Uso en directivas

```html
<!-- Uso en directivas -->
<div class="users-table" *ngxPermissionsOnly="['user:list']"></div>
```

Uso en componentes

```ts
// Inject the service
permissions = inject(NgxPermissionsService);

// Add roles
const roles = ['user:list'];
this.permissions.loadPermissions(roles);

// Get roles
console.log('->', this.permissions.getPermissions());
```

Uso en tests

```ts

```

## Linter y formateo

- Instalar las extensiones de vscode
- Se configura el linter y formateo con `eslint` y `prettier`

## Configuración de la aplicación

- Personalizar el vscode
- Personalizar el eslint
- Se crean los comandos:

```sh
$ npm run lint
$ npm run lint:fix
$ npm run format:css
```

---

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```
