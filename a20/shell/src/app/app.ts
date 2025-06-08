import { Component, inject, NgZone } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'shell';

  permissions  = inject(NgxPermissionsService)

  constructor() {
    // authInfo.userName = 'Jane Doe';

    (globalThis as any).ngZone = inject(NgZone);
  }

  ngOnInit(): void {
    const roles = ["user:list", "user:create", "user:update", "user:delete"];


    this.permissions.loadPermissions(roles);

    console.log('shell:\n', this.permissions.getPermissions());

  }
}
