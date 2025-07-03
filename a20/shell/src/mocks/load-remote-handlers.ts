import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/native-federation';

export async function loadRemoteHandlers() {
  const usersHandlersModule = await loadRemoteModule({
    remoteName: 'remote-angular20',
    exposedModule: './mocks',
  } as LoadRemoteModuleOptions).then((m) => m.handlers);

  return [...usersHandlersModule];
}
