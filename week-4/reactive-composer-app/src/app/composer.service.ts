/*
============================================
; Title: Assignment 4.3
; Author: Mike Goldberg
; Date: 07/27/2020
; Modified By: Mike Goldberg
; Description:  Handling Events with Observables
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface'

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Pyotr Ilyich Tchaikovsky", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johannes Brahms", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Franz Schubert", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Robert Schumann", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
      }
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerID: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerID) {
        return composer;
      }
    }
  }
}
