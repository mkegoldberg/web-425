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
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Array to hold list of composers
  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = composerService.getComposers()
  }

  ngOnInit(): void { }

}
