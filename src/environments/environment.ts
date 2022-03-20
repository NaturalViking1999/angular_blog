// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Envirenment } from "./interface";

export const environment: Envirenment = {
  production: false,
  apiKey: 'AIzaSyBmSAOR1ElqD3VwG2rfPp3B8GmmGw7d0go',
  firebaseDatabaseUrl: 'https://angular-blog-4b3cf-default-rtdb.europe-west1.firebasedatabase.app/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
