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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
