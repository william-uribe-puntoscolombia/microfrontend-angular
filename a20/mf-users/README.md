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

### Actualización

- ejecutar `ng update`
- ejecutar `ncu -t minor` para ver, `ncu -t minor -u` para actualizar
- actualizar la version de Bun.js o Node.js, en el `.mise.toml` y en el package.json
