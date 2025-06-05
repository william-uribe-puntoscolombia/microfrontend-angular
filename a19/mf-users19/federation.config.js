const { withNativeFederation, shareAll, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mf-users',

  exposes: {
    // './Component': './src/app/app.component.ts',
    // './web-components': './src/bootstrap.ts',
    'users-list': './src/app/pages/users-list/users-list.component.ts',
  },


  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  // shared: {
  //   ...share({
  //     "@angular/core": { requiredVersion: "auto" },
  //     "@angular/common": { requiredVersion: "auto" },
  //     "@angular/router": { requiredVersion: "auto" },
  //     "@angular/common/http": { requiredVersion: "auto" },
  //   })
  // },

  // shared: {
  //   // "@angular/core": "^19.2.0",
  //   // "@angular/common": "^19.2.0",
  //   // "@angular/router": "^19.2.0",

  //   // "@angular/animations": "^19.2.0",
  //   // "@angular/compiler": "^19.2.0",
  //   // "@angular/forms": "^19.2.0",
  //   // "@angular/platform-browser": "^19.2.0",
  //   // "@angular/platform-browser-dynamic": "^19.2.0",

  //   "@angular/core": {requiredVersion: '19.2.0'},
  //   "@angular/common": {requiredVersion: '19.2.0'},
  //   "@angular/router": {requiredVersion: '19.2.0'},
  //   // "@angular/common/http": {requiredVersion: '19.2.0'}
  // },

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
