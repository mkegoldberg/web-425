/*
============================================
; Title: Assignment 5.4
; Author: Mike Goldberg
; Date: 08/05/2020
; Modified By: Mike Goldberg
; Description: Dialogues
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
