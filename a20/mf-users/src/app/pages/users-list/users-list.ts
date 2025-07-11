import { Component, inject, OnInit, signal } from '@angular/core';
import { LoginService } from '@core/services/login-service';
import { UserService } from '@core/services/user-service';
import { provideTranslocoScope, TranslocoDirective, TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
// export const loader = ['en', 'es'].reduce<Record<string, () => Promise<any>>>((acc, lang) => {
//   acc[lang] = () => import(`../../../assets/i18n/${lang}.json`);
//   return acc;
// }, {});
export interface User {
  id: string;
  firstName: string;
  lastName: string;
}
@Component({
  selector: 'mf-users-users-list',
  imports: [NgxPermissionsModule, TranslocoModule, TranslocoDirective],
  providers: [
    provideTranslocoScope({
      scope: 'userList',
      loader: {
        en: () => import(`../../../assets/i18n/userList/en.json`).then((m) => m.default),
        es: () => import(`../../../assets/i18n/userList/es.json`).then((m) => m.default),
      },
    }),
  ],
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.css', './users-list.tailwind.css'],
  standalone: true,
})
export class UsersList implements OnInit {
  permissions = inject(NgxPermissionsService);
  userService = inject(UserService);
  loginService = inject(LoginService);
  translocoService = inject(TranslocoService);
  usersList = signal<User[]>([]);

  ngOnInit(): void {
    this.loginService.login();
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

    this.getUser();
    /**
     * log
     */
    console.log('mf20-permissions:\n', this.permissions.getPermissions());
  }

  getUser() {
    this.userService.getUser().subscribe({
      next: (user: User) => {
        console.log('User data:', user);
        this.usersList.update((users) => [...users, user]);
        console.log(this.usersList());
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      },
    });
  }
}
