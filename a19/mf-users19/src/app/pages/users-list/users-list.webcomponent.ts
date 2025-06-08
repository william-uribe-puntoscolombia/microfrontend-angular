import 'zone.js'; // Importante si usa zone.js

/**
 * Crea un webcomponent a partir del userlist
 */
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { UsersList } from './users-list.component';
import { appConfig } from '../../app.config';

(async () => {
  try {
    const app = await createApplication({ providers: appConfig.providers || [] });

    const ele = createCustomElement(UsersList, { injector: app.injector });
    const eleName = 'app-users-list-webcomp';

    if (!customElements.get(eleName)) customElements.define(eleName, ele);


  } catch (err) {
    console.error('mf19:\nError defining UsersList as custom element:', err);
  }
})();
