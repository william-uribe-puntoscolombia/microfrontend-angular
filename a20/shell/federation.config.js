const { withNativeFederation, shareAll, share } = require('@angular-architects/native-federation/config');
const { LOG_INFO } = require('karma/lib/constants');

module.exports = withNativeFederation({

  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
    '@angular/core': { singleton: true, strictVersion: false, requiredVersion: '^20.0.0' },
    '@angular/common': { singleton: true, strictVersion: false, requiredVersion: '^20.0.0' },
    '@angular/router': { singleton: true, strictVersion: false, requiredVersion: '^20.0.0' },
    'ngx-permissions': { singleton: true, strictVersion: false, requiredVersion: 'auto' }
  },


  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

});
