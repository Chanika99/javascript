'use strict'

const answer = confirm('Should I calculate the square root?');
const resultElement = document.getElementById('result');

if (answer) {

  const input = prompt("Enter a number:");
  const number = Number(input);

  if (isNaN(number)) {
    resultElement.textContent = "Please enter a valid number.";
  } else if (number < 0) {
    resultElement.textContent = "The square root of a negative number is not defined.";
  } else {
    const squareRoot = Math.sqrt(number);
    resultElement.textContent = `The square root of ${number} is ${squareRoot}.`;
  }
} else {
  resultElement.textContent = "The square root is not calculated.";
}