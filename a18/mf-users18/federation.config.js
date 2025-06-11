const {
  withNativeFederation,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "mfa18",

  exposes: {
    "./web-component": "./src/app/app.webcomponent.ts",
  },

  shared: {},

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
