/*
============================================
; Title: Assignment 8.2
; Author: Mike Goldberg
; Date: 08/27/2020
; Modified By: Mike Goldberg
; Description: Final Version
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
    this.assignment = 'Welcome to In-N-Out Books'
  }
}
