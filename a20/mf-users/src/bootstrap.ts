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
