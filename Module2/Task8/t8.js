'use strict'

function concat(arr) {
    let result = "";  // Initialize an empty string to hold the concatenated result
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];  // Add each element of the array to the result
    }
    return result;
}

const names = ["Johnny", "DeeDee", "Joey", "Marky"];

const concatenatedResult = concat(names);


document.getElementById('concatenatedResult').textContent =`${concatenatedResult}.`;