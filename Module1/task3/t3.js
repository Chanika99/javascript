'use strict'

const integer = []
for(let i = 0; i< 3; i++){
  integer.push(prompt('Enter integer'))
}

function calculate() {
            // Get values from input fields and convert them to integers
            let num1 = parseInt(document.getElementById("num1").value);
            let num2 = parseInt(document.getElementById("num2").value);
            let num3 = parseInt(document.getElementById("num3").value);

            // Calculate sum, product, and average
            let sum = num1 + num2 + num3;
            let product = num1 * num2 * num3;
            let average = sum / 3;

            // Display results in HTML document
            document.getElementById("sumResult").innerText = "Sum: " + sum;
            document.getElementById("productResult").innerText = "Product: " + product;
            document.getElementById("averageResult").innerText = "Average: " + average.toFixed(2);
        }