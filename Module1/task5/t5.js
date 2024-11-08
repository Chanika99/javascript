'use strict';

const leapYear = prompt('Enter a Year')
const year = Number(leapYear);

/*
year % 4 === 0
year % 100 === 0
year % 400 === 0

year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
 */

 if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
   document.querySelector('#target').innerHTML += `<li>${year} is a leap year</li>`;
 }
 else {
   document.querySelector('#target').innerHTML += `<li>${year} is not a leap year</li>`;
 }