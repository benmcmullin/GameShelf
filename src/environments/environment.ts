// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBcrbsZAfP5AUxbNi9N7_YJBJxCNq22D_w",
    authDomain: "cape-books-evening.firebaseapp.com",
    projectId: "cape-books-evening",
    dbRootUrl: "https://cape-books-evening-default-rtdb.firebaseio.com",
    dbGames: "https://cape-books-evening-default-rtdb.firebaseio.com/books",
    authRootUrl: "https://identitytoolkit.googleapis.com/v1/accounts:",
    authSignUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`,
    authSignIn:
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
  },
  google: {
    rootApiUrl: "https://www.googleapis.com/books/v1/",
    searchUrl: "https://www.googleapis.com/books/v1/volumes?q="
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
