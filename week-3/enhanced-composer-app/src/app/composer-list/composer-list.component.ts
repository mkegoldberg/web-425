/*
============================================
; Title: Assignment 3.2
; Author: Mike Goldberg
; Date: 07/20/2020
; Modified By: Mike Goldberg
; Description: Advanced Routing
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Array to hold list of composers
  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers()
  }

  ngOnInit(): void { }

}
