/*
============================================
; Title: Assignment 3.2
; Author: Mike Goldberg
; Date: 07/20/2020
; Modified By: Mike Goldberg
; Description: Advanced Routing
;===========================================
*/

import { IComposer } from "./composer.interface"

export class Composer {
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
