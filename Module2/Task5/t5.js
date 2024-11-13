'use strict'

const numbers = [];


while (true) {
    let input = prompt("Enter a number:");
    let number = Number(input);

    if (numbers.includes(number)) {
        console.log(`The number ${number} has already been given.`);
        break;
    }

    numbers.push(number);
}

numbers.sort((a, b) => a - b);

console.log("All given numbers in ascending order:");
for (let num of numbers) {
    console.log(num);
}