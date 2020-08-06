/*
============================================
; Title: Assignment 5.4
; Author: Mike Goldberg
; Date: 08/05/2020
; Modified By: Mike Goldberg
; Description: Dialogs
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'in-n-out-books';
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.4 - Dialogs'
  }
}
