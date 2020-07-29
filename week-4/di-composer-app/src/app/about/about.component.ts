/*
============================================
; Title: Assignment 4.2
; Author: Mike Goldberg
; Date: 07/27/2020
; Modified By: Mike Goldberg
; Description:  Inversion of Control and Dependency Injection
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
