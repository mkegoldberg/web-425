/*
============================================
; Title: Assignment 6.4
; Author: Mike Goldberg
; Date: 08/15/2020
; Modified By: Mike Goldberg
; Description: Input Properties
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
    this.assignment = "Exercise 6.4 - Input Properties"
  }


  ngOnInit(): void {
  }

}
