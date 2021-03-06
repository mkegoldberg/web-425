/*
============================================
; Title: Assignment 3.3
; Author: Mike Goldberg
; Date: 07/21/2020
; Modified By: Mike Goldberg
; Description: Passing Data through Routes
;===========================================
*/

import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: "", component: SignInComponent },
  { path: "home", component: HomeComponent }
]


