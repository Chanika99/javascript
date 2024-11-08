'use strict';

function even(arr) {
  const evenNumbers = [];
  for (const number of arr) {
    if (number % 2 !==0) {
      const index = arr.indexOf(number);
      arr.splice(index,1)
    }
  }
}

const numbers = [2, 256, 69, 75, 58, 6, 5, 1, 85, 92, 14]
console.log(numbers)
even(numbers)
console.log(numbers);