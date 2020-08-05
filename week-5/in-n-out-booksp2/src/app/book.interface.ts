/*
============================================
; Title: Assignment 5.3
; Author: Mike Goldberg
; Date: 08/04/2020
; Modified By: Mike Goldberg
; Description: Data Tables
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
