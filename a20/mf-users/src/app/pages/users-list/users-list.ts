import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '@core/services/user-service';
import { provideTranslocoScope, TranslocoDirective, TranslocoModule } from '@jsverse/transloco';
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
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
@Component({
  selector: 'mf-users-users-list',
  imports: [NgxPermissionsModule, TranslocoModule, TranslocoDirective, ButtonModule, FormsModule, DatePickerModule],
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
  styleUrls: ['./users-list.css', './users-list.tailwind.css'],
  standalone: true,
})
export class UsersList implements OnInit {
  date: Date | undefined;

  permissions = inject(NgxPermissionsService);
  userService = inject(UserService);
  usersList = signal<User[]>([]);

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
