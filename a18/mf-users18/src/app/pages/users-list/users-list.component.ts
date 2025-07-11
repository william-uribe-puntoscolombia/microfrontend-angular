import { Component } from '@angular/core';
import {
  provideTranslocoScope,
  TranslocoModule,
  TranslocoService,
} from '@jsverse/transloco';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [TranslocoModule],
  providers: [
    provideTranslocoScope({
      scope: 'userList',
      loader: {
        en: () =>
          import(`../../../assets/i18n/userList/en.json`).then(
            (m) => m.default
          ),
        es: () =>
          import(`../../../assets/i18n/userList/es.json`).then(
            (m) => m.default
          ),
      },
    }),
  ],
  templateUrl: './users-list.component.html',
})
export class UsersList {
  constructor(private translocoService: TranslocoService) {
    window.addEventListener('change-language', (event: Event) => {
      const customEvent = event as CustomEvent;
      const { language } = customEvent.detail;
      this.translocoService.setActiveLang(language);
    });
  }
}
