'use strict'

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('source');
    const targetParagraph = document.getElementById('target');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const firstName = document.querySelector('input[name="firstname"]').value;
        const lastName = document.querySelector('input[name="lastname"]').value;

        const fullName = `Your name is ${firstName} ${lastName}`;
        targetParagraph.textContent = fullName; // Display the full name in the target paragraph
    });
});