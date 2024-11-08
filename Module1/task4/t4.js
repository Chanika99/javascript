'use strict';

window.onload = function sortStudent() {

    const name = prompt("Please enter your name:");

    if (!name) {
        document.getElementById("result").innerText = "You didn't enter a name!";
        return;
    }

    const randomNum = Math.floor(Math.random() * 4) + 1;

    let house;

    // Assign the house
    switch (randomNum) {
        case 1:
            house = "Gryffindor";
            break;
        case 2:
            house = "Slytherin";
            break;
        case 3:
            house = "Hufflepuff";
            break;
        case 4:
            house = "Ravenclaw";
            break;
        default:
            house = "Unknown House"; // This should never happen
    }

    // Display the result
    document.getElementById("result").innerText = `${name}, you are ${house}!`;
}
