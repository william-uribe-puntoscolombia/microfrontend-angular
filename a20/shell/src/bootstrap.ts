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
