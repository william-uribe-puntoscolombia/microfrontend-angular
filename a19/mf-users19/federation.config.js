const { withNativeFederation, shareAll, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'remote-angular19',

  exposes: {
    './UsersList': './src/app/pages/users-list/users-list.webcomponent.ts',
  },

  /**
   * No es necario compartir por que este angular hay que exportarle cada componente como WebComponent
   */
  shared: {
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
  ]
});
