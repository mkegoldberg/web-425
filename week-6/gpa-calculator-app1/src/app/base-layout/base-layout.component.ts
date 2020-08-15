/*
============================================
; Title: Assignment 6.3
; Author: Mike Goldberg
; Date: 08/15/2020
; Modified By: Mike Goldberg
; Description: Layouts
;===========================================
*/

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = "Exercise 6.3 - Layouts"
  }


  ngOnInit(): void {
  }

}
