/*
============================================
; Title: Assignment 7.2
; Author: Mike Goldberg
; Date: 08/18/2020
; Modified By: Mike Goldberg
; Description: Reactive Forms
;===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
