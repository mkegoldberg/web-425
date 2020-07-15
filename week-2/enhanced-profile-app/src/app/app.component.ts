/*
============================================
; Title: Assignment 2.3
; Author: Mike Goldberg
; Date: 07/12/2020
; Modified By: Mike Goldberg
; Description: Data Binding
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = "Assignment 2.3 - Data Binding";
  isLoggedIn: boolean = true;
}
