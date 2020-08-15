/*
============================================
; Title: Assignment 6.2
; Author: Mike Goldberg
; Date: 08/15/2020
; Modified By: Mike Goldberg
; Description: Input/Output
;===========================================
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: "0123456789",
        title: "Red Rising",
        description: "Book 1 - Darrow becomes a Gold",
        numOfPages: 452,
        authors: ["Pierce Brown"],
      },
      {
        isbn: "1234567890",
        title: "Golden Sun",
        description: "Book 2 - Darrow returns to Mars in his new role",
        numOfPages: 460,
        authors: ["Pierce Brown"],
      },
      {
        isbn: "2345678901",
        title: "Morning Star",
        description: "Book 3 - Darrow challenges the a system that has been in place for thousands of years",
        numOfPages: 473,
        authors: ["Pierce Brown"],
      },
      {
        isbn: "3456789012",
        title: "Iron Gold",
        description: "Book 4 - 10 years after the rising",
        numOfPages: 457,
        authors: ["Pierce Brown"],
      },
      {
        isbn: "4567890123",
        title: "Dark Age",
        description: "Book 4 - The tide turns the wrong way",
        numOfPages: 463,
        authors: ["Pierce Brown"],
      },
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
