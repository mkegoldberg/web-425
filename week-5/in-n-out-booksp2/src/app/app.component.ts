/*
============================================
; Title: Assignment 5.3
; Author: Mike Goldberg
; Date: 08/04/2020
; Modified By: Mike Goldberg
; Description: Data Tables
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
    this.assignment = 'Exercise 5.3 - Data Tables'
  }
}
