import { Component, inject, OnInit } from '@angular/core';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-users-list',
  imports: [NgxPermissionsModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList implements OnInit {
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
    console.log('mf20-permissions:\n', this.permissions.getPermissions());

  }
}
