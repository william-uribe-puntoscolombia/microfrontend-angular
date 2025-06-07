import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(NgxPermissionsModule.forRoot())
  ]
};

// bootstrapApplication(App, {
//   providers: [
//     provideRouter(
//       routes,
//       withComponentInputBinding())
//     ],
// });
