import { Component, inject } from '@angular/core';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgxPermissionsModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersList {
  permissions  = inject(NgxPermissionsService)


  ngOnInit(): void {

    /**
     * Si no hay permisos heredados, se cargan los permisos por defecto
     */
    // const currentPermissions = this.permissions.getPermissions();
    // if (Object.keys(currentPermissions).length === 0) {
      // const roles = ["user:list"];
      // this.permissions.loadPermissions(roles);
    // }

    /**
     * log
     */
    console.log('mf19-permissions:\n', this.permissions.getPermissions());

  }
}
