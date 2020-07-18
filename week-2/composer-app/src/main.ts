/*
============================================
; Title: Assignment 2.4
; Author: Mike Goldberg
; Date: 07/17/2020
; Modified By: Mike Goldberg
; Description: Putting it all together
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
