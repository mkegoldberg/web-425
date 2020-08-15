/*
============================================
; Title: Assignment 6.2
; Author: Mike Goldberg
; Date: 08/15/2020
; Modified By: Mike Goldberg
; Description: Input/Output
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
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1'
  }
}
