import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PuppyLoveIoAppComponent, environment } from './app/';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';
import {HTTP_PROVIDERS} from '@angular/http';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(PuppyLoveIoAppComponent, [
    APP_SHELL_RUNTIME_PROVIDERS,
    HTTP_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase('https://puppy-love-io.firebaseio.com')
]);

