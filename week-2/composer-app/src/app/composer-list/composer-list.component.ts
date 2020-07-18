/*
============================================
; Title: Assignment 2.4
; Author: Mike Goldberg
; Date: 07/17/2020
; Modified By: Mike Goldberg
; Description: Putting it all together
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ComposerList } from '../composer-list'

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  // Array to hold list of composers
  composers: Array<ComposerList>;

  constructor() {
    this.composers = [
      new ComposerList("Pyotr Ilyich Tchaikovsky", "Classical"),
      new ComposerList("Johannes Brahms", "Classical"),
      new ComposerList("Franz Schubert", "Classical"),
      new ComposerList("Robert Schumann", "Classical"),
      new ComposerList("Joseph Haydn", "Classical")
    ]
  }

  ngOnInit(): void { }

}
