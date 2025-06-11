import 'zone.js'; // Importante si usa zone.js
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

(async () => {
  try {
    const app = await createApplication({
      providers: appConfig.providers || [],
    });

    const ele = createCustomElement(AppComponent, { injector: app.injector });
    const eleName = 'app-users-mf18';

    if (!customElements.get(eleName)) customElements.define(eleName, ele);
  } catch (err) {
    console.error('mf18:\nError defining AppComponent as custom element:', err);
  }
})();
