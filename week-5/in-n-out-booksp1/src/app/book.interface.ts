/*
============================================
; Title: Assignment 5.2
; Author: Mike Goldberg
; Date: 08/04/2020
; Modified By: Mike Goldberg
; Description: Angular Material
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
