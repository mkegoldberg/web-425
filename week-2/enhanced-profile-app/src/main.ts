/*
============================================
; Title: Assignment 2.3
; Author: Mike Goldberg
; Date: 07/12/2020
; Modified By: Mike Goldberg
; Description: Data Binding
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
