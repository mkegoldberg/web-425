/*
============================================
; Title: Assignment 1.4
; Author: Mike Goldberg
; Date: 07/09/2020
; Modified By: Mike Goldberg
; Description: TypeScript
;===========================================
*/

import { IPerson } from './person.interface';

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Mike", "Goldberg");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);