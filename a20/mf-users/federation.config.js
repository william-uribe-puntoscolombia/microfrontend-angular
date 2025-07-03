const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'remote-angular20',

  exposes: {
    './app.routes': './src/app/app.routes.ts',
    './mocks': './src/api-mock/handlers.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    // 'ngx-permissions': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  features: {
    ignoreUnusedDeps: true, // Avoid Tailwind errors.
  },

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
