// projects/shell/src/app/shared/microfrontend.service.ts
import { Injectable } from '@angular/core';
import { registerMicroApps, start, RegistrableApp } from 'qiankun';

@Injectable({
  providedIn: 'root'
})
export class MicrofrontendService {

  constructor() { }

  registerApps() {
    const apps: RegistrableApp<any>[] = [
      {
        name: 'remote-app', // Nombre único para la app remota
        entry: '//localhost:4201', // Puerto donde corre la app remota
        container: '#subapp-container', // Selector del contenedor en el shell
        activeRule: '/remote', // Regla de activación (cuando la ruta sea /remote)
      },
    ];

    registerMicroApps(apps, {
      beforeLoad: async (app) => console.log('Before load', app.name),
      beforeMount: async (app) => console.log('Before mount', app.name),
      afterMount: async (app) => console.log('After mount', app.name),
    });

    start(); // Inicia qiankun
  }
}
