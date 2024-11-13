'use strict'

let numbers = [];
while (true) {
    let input = parseInt(prompt('Enter a number: '));

    if (isNaN(input)){
        alert('Please enter a valid number.');
    } else if (input === 0){
        break;
    }
    numbers.push(input);
}

numbers.sort(function(a, b) {
    return b - a;
});

console.log("Sorted Numbers :" + numbers);