/*
============================================
; Title: Assignment 4.4
; Author: Mike Goldberg
; Date: 07/27/2020
; Modified By: Mike Goldberg
; Description:  Async Pipe
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


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

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerID: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerID) {
        return composer;
      }
    }
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers => composers.filter(
        composer => composer.fullName.toLowerCase().indexOf(name.toLocaleLowerCase()) > -1
      ))
    )
  }
}
