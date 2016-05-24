import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PuppyLoveIoAppComponent, environment } from './app/';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(PuppyLoveIoAppComponent, [
    APP_SHELL_RUNTIME_PROVIDERS,
    HTTP_PROVIDERS,
]);

