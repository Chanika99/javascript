'use strict';

const numOfRolls = prompt("Enter the number of dice rolls:");
const rolls = Number(numOfRolls);

if (isNaN(rolls) || rolls <= 0) {

  document.getElementById('result').textContent = "Please enter a valid positive number.";
} else {
  let sum = 0;

  for (let i = 0; i < rolls; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
  }

  document.getElementById('result').textContent = `The sum of ${rolls} dice rolls is ${sum}.`;
}