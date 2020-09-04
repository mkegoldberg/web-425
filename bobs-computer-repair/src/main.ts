/*
============================================
; Title: Assignment 8.3
; Author: Mike Goldberg
; Date: 08/28/2020
; Modified By: Mike Goldberg
; Description: Bob's Computer Repair
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
