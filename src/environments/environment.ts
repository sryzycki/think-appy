// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBFriiGJZwD67bNq9BjcSQrNITxLZK-hNE',
    authDomain: 'think-appy.firebaseapp.com',
    databaseURL: 'https://think-appy.firebaseio.com',
    projectId: 'think-appy',
    storageBucket: '',
    messagingSenderId: '151956695285',
  },
};
