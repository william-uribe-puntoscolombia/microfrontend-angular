import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


// bootstrapApplication(App, {
//   providers: [
//     provideRouter(
//       routes,
//       withComponentInputBinding())
//     ],
// });
