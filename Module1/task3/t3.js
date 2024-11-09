'use strict';

const input1 = prompt("Enter the first integer:");
const input2 = prompt("Enter the second integer:");
const input3 = prompt("Enter the third integer:");

const num1 = Number(input1);
const num2 = Number(input2);
const num3 = Number(input3);

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  document.getElementById('result').textContent = "Please enter valid integers.";
} else {

  const sum = num1 + num2 + num3;
  const product = num1 * num2 * num3;
  const average = sum / 3;

   document.getElementById('result').innerHTML = `
    <p>Sum: ${sum}</p>
    <p>Product: ${product}</p>
    <p>Average: ${average}</p>
  `;
}