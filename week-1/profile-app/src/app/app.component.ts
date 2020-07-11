/*
============================================
; Title: Assignment 1.5
; Author: Mike Goldberg
; Date: 07/10/2020
; Modified By: Mike Goldberg
; Description: Angular Components
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = "Assignment 1.5 - Angular Components"
}
