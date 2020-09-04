/*
============================================
; Title: Assignment 8.3
; Author: Mike Goldberg
; Date: 08/28/2020
; Modified By: Mike Goldberg
; Description: Bob's Computer Repair
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: string;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear().toString();
  }

}
