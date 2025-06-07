const { withNativeFederation, shareAll, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'remote-angular19',

  exposes: {
    // Anterior:
    // 'users-list': './src/app/pages/users-list/users-list.component.ts',
    // Nuevo: Exponer el script que define el Web Component
    'users-list-wc': './src/bootstrap.ts',
  },


  shared: {
    // ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    // "@angular/core": { singleton: true, strictVersion: false, requiredVersion: '19.2.0' }, // Reemplaza '19.x.x' con tu versión exacta
    // "@angular/common": { singleton: true, strictVersion: false, requiredVersion: '19.2.0' }, // Reemplaza '19.x.x' con tu versión exacta
    // "@angular/router": { singleton: true, strictVersion: false, requiredVersion: '19.2.0' }, // Reemplaza '19.x.x' con tu versión exacta
    // "@angular/elements": { singleton: true, strictVersion: false, requiredVersion: '19.2.14' }, // Añade @angular/elements
    // "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: '19.x.x' },
    // "@angular/forms": { singleton: true, strictVersion: false, requiredVersion: '19.x.x' },
  },


  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    'ngx-permissions'
  ]
});
