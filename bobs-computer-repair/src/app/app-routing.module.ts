/*
============================================
; Title: Assignment 8.3
; Author: Mike Goldberg
; Date: 08/28/2020
; Modified By: Mike Goldberg
; Description: Bob's Computer Repair
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component'


const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
