const { withNativeFederation, shareAll, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  shared: {
    ...shareAll({ singleton: true, strictVersion: false, requiredVersion: 'auto' }),
    ...share({
      // '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      // '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      // '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      // '@ngrx/signals': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      // 'ngx-permissions': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      // '@jsverse/transloco': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      // '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      // primeng: { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      // 'primeng/base': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      //
      // '@primeuix/themes': {
      //   singleton: true,
      //   strictVersion: true,
      //   requiredVersion: 'auto',
      //   includeSecondaries: true, // necesario
      //   build: 'separate',
      // },
    }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    'consola',
    // Add further packages you don't need at runtime
  ],

  // features: {
  //   ignoreUnusedDeps: true, // Avoid Tailwind errors.
  // },

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
