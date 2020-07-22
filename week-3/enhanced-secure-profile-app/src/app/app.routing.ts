/*
============================================
; Title: Assignment 3.4
; Author: Mike Goldberg
; Date: 07/21/2020
; Modified By: Mike Goldberg
; Description: Guarding Routes
;===========================================
*/

import { Routes } from '@angular/router';
import { SignInGuard } from './sign-in.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  { path: "", component: SignInComponent },
  { path: "home", component: HomeComponent, canActivate: [SignInGuard]}
]


