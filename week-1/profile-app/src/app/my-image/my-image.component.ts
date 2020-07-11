/*
============================================
; Title: Assignment 1.5
; Author: Mike Goldberg
; Date: 07/10/2020
; Modified By: Mike Goldberg
; Description: Angular Components
;===========================================
*/



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
