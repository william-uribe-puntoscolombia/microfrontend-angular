import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { NgxPermissionsService } from 'ngx-permissions';

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

  ngOnInit(): void {
    const roles = ['user:list', 'user:create', 'user:update', 'user:delete'];

    this.permissions.loadPermissions(roles);

    console.log('shell:\n', this.permissions.getPermissions());
  }

  goToUrl(url: string) {
    this.router.navigateByUrl(`${url}`);
    this.viewRouter.set(false);
    setTimeout(() => this.viewRouter.set(true));
  }
}
