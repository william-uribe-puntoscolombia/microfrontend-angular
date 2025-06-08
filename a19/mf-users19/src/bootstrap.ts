// import { createApplication } from '@angular/platform-browser';
// import { createCustomElement } from '@angular/elements';
// import { ApplicationRef, Injector } from '@angular/core';
// import { UsersList } from './app/pages/users-list/users-list.component';
// import { appConfig } from './app/app.config'; // Importa tu appConfig existente

// (async () => {
//   try {
//     console.log('-mf19- Bootstrapping UsersList as a Web Component...');
//     // Crea un contexto de aplicación mínimo para obtener un inyector.
//     // Pasa los providers de appConfig si UsersList o sus dependencias los necesitan.
//     const app: ApplicationRef = await createApplication({
//       providers: [
//         ...(appConfig.providers || []),
//         // Puedes añadir providers específicos para el Web Component aquí si es necesario
//       ],
//     });
//     const injector: Injector = app.injector;

//     // Crea el Custom Element
//     const usersListCustomElement = createCustomElement(UsersList, { injector });

//     // Define el Custom Element en el navegador
//     // Asegúrate de que 'users-list-in-remote' no colisione con otros nombres de elementos.
//     if (!customElements.get('users-list-in-remote')) {
//       customElements.define('users-list-in-remote', usersListCustomElement);
//       console.log('-mf19- Custom element "users-list-in-remote" defined successfully.');
//     } else {
//       console.log('-mf19- Custom element "users-list-in-remote" already defined.');
//     }

//   } catch (err) {
//     console.error('-mf19- Error defining UsersList as custom element:', err);
//   }
// })();

// La llamada original a bootstrapApplication(AppComponent, appConfig) se elimina o comenta,
// ya que este bootstrap.ts ahora se dedica a definir el Web Component.
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
