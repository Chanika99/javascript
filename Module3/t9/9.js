'use strict'

const calculationInput = document.getElementById("calculation");
const calculateButton = document.getElementById("start");
const resultParagraph = document.getElementById("result");

function calculate() {
    const input = calculationInput.value.trim();

    if (input.includes("+")) {
        const parts = input.split("+");
        const num1 = parseInt(parts[0]);
        const num2 = parseInt(parts[1]);
        const result = num1 + num2;
        resultParagraph.textContent = `Result: ${result}`;
    } else if (input.includes("-")) {
        const parts = input.split("-");
        const num1 = parseInt(parts[0]);
        const num2 = parseInt(parts[1]);
        const result = num1 - num2;
        resultParagraph.textContent = `Result: ${result}`;
    } else if (input.includes("*")) {
        const parts = input.split("*");
        const num1 = parseInt(parts[0]);
        const num2 = parseInt(parts[1]);
        const result = num1 * num2;
        resultParagraph.textContent = `Result: ${result}`;
    } else if (input.includes("/")) {
        const parts = input.split("/");
        const num1 = parseInt(parts[0]);
        const num2 = parseInt(parts[1]);
        if (num2 === 0) {
            resultParagraph.textContent = "Error: Cannot divide by zero.";
        } else {
            const result = num1 / num2;
            resultParagraph.textContent = `Result: ${result}`;
        }
    } else {
        resultParagraph.textContent = "Error: Invalid input. Use +, -, *, or /.";
    }
}

calculateButton.addEventListener("click", calculate);