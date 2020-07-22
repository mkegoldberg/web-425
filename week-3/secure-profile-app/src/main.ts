/*
============================================
; Title: Assignment 3.3
; Author: Mike Goldberg
; Date: 07/21/2020
; Modified By: Mike Goldberg
; Description: Passing Data through Routes
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
