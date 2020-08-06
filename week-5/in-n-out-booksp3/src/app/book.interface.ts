/*
============================================
; Title: Assignment 5.4
; Author: Mike Goldberg
; Date: 08/05/2020
; Modified By: Mike Goldberg
; Description: Dialogs
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
