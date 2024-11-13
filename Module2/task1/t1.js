'use strict';

let numbers = [];

for (let i = 0; i<5; i++){
    numbers[i] = parseInt(prompt('Enter number'));
}

for (let i =numbers.length - 1; i>=0; i --){
    console.log(`No: ${numbers[i]}`);
}