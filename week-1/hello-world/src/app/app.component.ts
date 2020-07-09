/*
============================================
; Title: Assignment 1.3
; Author: Mike Goldberg
; Date: 07/08/2020
; Modified By: Mike Goldberg
; Description: Using the Angular CLI
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in Goldberg's world!"
}
