// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api',
  fakeApiUrl: 'https://jsonplaceholder.typicode.com/users',
  apiUploadUrl: 'http://localhost:5000/uploads/',
  apiDoxUrl: 'http://localhost:5000/dox/',
  printUrl: 'http://192.168.100.9:8082/index/',
  appName: 'Qvise-Price Control',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
