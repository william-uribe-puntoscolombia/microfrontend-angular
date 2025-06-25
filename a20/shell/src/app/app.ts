import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { GlobalStore } from '@core/store/global.store';
import { TranslocoModule } from '@jsverse/transloco';
import { NgxPermissionsService } from 'ngx-permissions';

import { Notification } from './core/store/global.store.model';

@Component({
  selector: 'shell-root',
  imports: [RouterOutlet, TranslocoModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App implements OnInit {
  title = signal('shell');
  viewRouter = signal(true);

  permissions = inject(NgxPermissionsService);
  router = inject(Router);

  /**
   * Global store for managing application state.
   */
  readonly store = inject(GlobalStore);

  ngOnInit(): void {
    const roles = ['user:list', 'user:create', 'user:update', 'user:delete'];

    this.permissions.loadPermissions(roles);

    console.log('shell:\n', this.permissions.getPermissions());
  }

  goToUrl(event: MouseEvent, url: string) {
    event.preventDefault();

    this.router.navigateByUrl(`${url}`);
    this.viewRouter.set(false);
    setTimeout(() => this.viewRouter.set(true));
  }

  /**
   * Example method to add a notification.
   * This can be called from a button click or any other event in the application.
   */
  addNotification() {
    const notification: Notification = { id: '1', message: 'Welcome to the application!', type: 'info' };

    this.store.setNotification(notification);
  }
}
