import { Component, inject, OnInit } from '@angular/core';
import { provideTranslocoScope, TranslocoDirective, TranslocoModule } from '@jsverse/transloco';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
// export const loader = ['en', 'es'].reduce<Record<string, () => Promise<any>>>((acc, lang) => {
//   acc[lang] = () => import(`../../../assets/i18n/${lang}.json`);
//   return acc;
// }, {});
@Component({
  selector: 'mf-users-users-list',
  imports: [NgxPermissionsModule, TranslocoModule, TranslocoDirective],
  providers: [
    provideTranslocoScope({
      scope: 'mfUsers',
      loader: {
        en: () => import(`../../../assets/i18n/en.json`).then((m) => m.default),
        es: () => import(`../../../assets/i18n/es.json`).then((m) => m.default),
      },
    }),
  ],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
  standalone: true,
})
export class UsersList implements OnInit {
  permissions = inject(NgxPermissionsService);

  ngOnInit(): void {
    /**
     * Si no hay permisos heredados, se cargan los permisos por defecto
     */
    /**
      const currentPermissions = this.permissions.getPermissions();

      if (Object.keys(currentPermissions).length === 0) {
        const roles = ["user:list"];
        this.permissions.loadPermissions(roles);
      }
     */

    /**
     * log
     */
    console.log('mf20-permissions:\n', this.permissions.getPermissions());
  }
}
