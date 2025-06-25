import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

import { GlobalStore } from './core/store/global.store';
import { Notification } from './core/store/global.store.model';

@Component({
  selector: 'mf-users-root',
  imports: [RouterOutlet, TranslocoModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected title = 'mf-users';

  readonly store = inject(GlobalStore);

  /**
   * Example method to add a notification.
   * This can be called from a button click or any other event in the application.
   */
  addNotification() {
    const notification: Notification = { id: '1', message: 'Welcome to the application!', type: 'info' };

    this.store.setNotification(notification);
  }
}
