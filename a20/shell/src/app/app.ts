import { Component, inject, signal } from '@angular/core';
import {
  Router,
  RouterOutlet,
} from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected title = 'shell';
  viewRouter = signal(true);

  permissions = inject(NgxPermissionsService);
  router = inject(Router);

  ngOnInit(): void {
    const roles = ['user:list', 'user:create', 'user:update', 'user:delete'];

    this.permissions.loadPermissions(roles);

    console.log('shell:\n', this.permissions.getPermissions());
  }

  goToUrl(url: string) {
    console.log(url);
    this.router.navigateByUrl(`${url}`);
    this.viewRouter.set(false);
    setTimeout(() => this.viewRouter.set(true));
  }
}
