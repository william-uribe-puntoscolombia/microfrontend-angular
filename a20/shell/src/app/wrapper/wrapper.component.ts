/**
 * Encapsula el componente remoto en este componente
 * crea un componente con el remoto y lo ingresa en el appendChild de este.
 */
import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@softarc/native-federation-runtime';
import { WrapperConfig } from './wrapper-config-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wrapper',
  imports: [CommonModule],
  template: '',
  styles: '',
  standalone: true,
})
export class WrapperComponent implements OnInit {
  /**
   * Obtiene la instancia actual
   */
  elm = inject(ElementRef);

  /**
   * Obtiene los datos data pasados por el router
   */
  routeActive = inject(ActivatedRoute);

  async ngOnInit() {
    /**
     * obtiene un objeto pasdo por el router
     * eje: {remoteName: 'remote-angular19', exposedModule: './UsersList', elementName: 'app-users-list-webcomp'}
     */
    const config: WrapperConfig = this.routeActive.snapshot.data['config'];
    const { exposedModule, remoteName, elementName } = config;

    /**
     * Le agrega a la instancia actual el componente pasado por remoto
     */
    await loadRemoteModule(remoteName, exposedModule);
    const root = document.createElement(elementName);

    const fullPath = this.routeActive.snapshot.pathFromRoot
      .map((r) => r.url.map((u) => u.path).join('/'))
      .filter((value) => value !== '')
      .join('/');
    const fullPathSegments = fullPath.split('/');
    const subPath =
      fullPathSegments.length > 1
        ? fullPath.replace(`${fullPathSegments[0]}/`, '')
        : '';

    root.setAttribute('route', subPath);

    this.elm.nativeElement.appendChild(root);
  }
}
