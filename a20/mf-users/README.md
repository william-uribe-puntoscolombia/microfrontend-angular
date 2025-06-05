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
<div class="users-table" *ngxPermissionsOnly="['user:list']">
```

Uso en componentes
```ts
// Inject the service
permissions  = inject(NgxPermissionsService)

// Add roles
const roles = ["user:list"];
this.permissions.loadPermissions(roles);

// Get roles
console.log('->', this.permissions.getPermissions());
```

Uso en tests

```ts


```

---

## Running end-to-end tests
For end-to-end (e2e) testing, run:

```bash
ng e2e
```

