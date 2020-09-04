/*
============================================
; Title: Assignment 8.3
; Author: Mike Goldberg
; Date: 08/28/2020
; Modified By: Mike Goldberg
; Description: Bob's Computer Repair
;===========================================
*/

export class Service {
  constructor (
   public serviceNumber: number,
   public serviceName: string,
   public servicePrice: string,
   public estHours: string,
   public parts: string
  ) {}
}
