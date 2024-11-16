'use strict'

document.addEventListener('DOMContentLoaded', function () {
    function calculate() {
        const userInput = document.getElementById('userInput').value.trim();

        if (userInput.length === 0) {
            document.getElementById('result').textContent = 'Please enter a calculation.';
            return;
        }

        let operator, num1, num2;

        if (userInput.includes('+')) {
            operator = '+';
        } else if (userInput.includes('-')) {
            operator = '-';
        } else if (userInput.includes('*')) {
            operator = '*';
        } else if (userInput.includes('/')) {
            operator = '/';
        } else {
            document.getElementById('result').textContent = 'Invalid operation. Please use +, -, *, or /.';
            return;
        }

        const numbers = userInput.split(operator);

        if (numbers.length !== 2) {
            document.getElementById('result').textContent = 'Invalid input. Please enter a valid calculation.';
            return;
        }

        num1 = parseInt(numbers[0]);
        num2 = parseInt(numbers[1]);

        let result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    document.getElementById('result').textContent = 'Cannot divide by zero';
                    return;
                }
                break;
            default:
                document.getElementById('result').textContent = 'Invalid operation. Please use +, -, *, or /.';
                return;
        }

        document.getElementById('result').textContent = `Result: ${result}`;
    }

    document.getElementById('start').addEventListener('click', calculate);
});