/*
============================================
; Title: Assignment 2.4
; Author: Mike Goldberg
; Date: 07/17/2020
; Modified By: Mike Goldberg
; Description: Putting it all together
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ComposerListComponent } from "./composer-list/composer-list.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", component: ComposerListComponent },
  { path: "composer-list", component: ComposerListComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
