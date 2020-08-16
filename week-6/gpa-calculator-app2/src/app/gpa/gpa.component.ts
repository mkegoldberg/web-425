/*
============================================
; Title: Assignment 6.4
; Author: Mike Goldberg
; Date: 08/15/2020
; Modified By: Mike Goldberg
; Description: Input Properties
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
