'use strict';

function even(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

const numbers = [2, 7, 4, 285, 46];

const evenNumbersArray = even(numbers);

console.log("Original array:", numbers);
console.log("Array of even numbers:", evenNumbersArray);