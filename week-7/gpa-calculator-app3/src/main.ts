/*
============================================
; Title: Assignment 7.2
; Author: Mike Goldberg
; Date: 08/18/2020
; Modified By: Mike Goldberg
; Description: Reactive Forms
;===========================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
